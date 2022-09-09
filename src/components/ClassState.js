import React, { Component } from "react";

const SECURITY_CODE = "paradigma";

export class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { value, loading } = this.state;

    if (!!loading)
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          this.setState({ loading: false, error: true });
        } else {
          this.setState({ loading: false, error: false });
        }
      }, 2000);
  }

  render() {
    const { name } = this.props;
    const { value, error, loading } = this.state;
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {error && !loading && <p>"Error: esto no funciona"</p>}
        {loading && <p>"Cargando..."</p>}
        <input
          value={value}
          onChange={(event) => this.setState({ value: event.target.value })}
          placeholder="Codigo de seguridad"
          type="text"
        />
        <button onClick={() => this.setState((prev) => ({ loading: true }))}>
          Comprobar
        </button>
      </div>
    );
  }
}
