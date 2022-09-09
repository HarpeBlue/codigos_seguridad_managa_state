import React, { Component } from "react";
import { useEffect } from "react";

export class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    console.log("Empezando el efecto...");
    if (!!this.state.loading)
      setTimeout(() => {
        console.log("haciendo el efecto...");
        this.setState((prev) => ({ loading: false }));
      }, 5000);
    console.log("terminando el efecto...");
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {this.state.error && <p>"Error: esto no funciona"</p>}
        {this.state.loading && <p>"Cargando..."</p>}
        <input placeholder="Codigo de seguridad" type="text" />
        <button onClick={() => this.setState((prev) => ({ loading: true }))}>
          Comprobar
        </button>
      </div>
    );
  }
}
