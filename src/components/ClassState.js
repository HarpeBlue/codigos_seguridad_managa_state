import React, { Component } from "react";

export class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {this.state.error && "Error: esto no funciona"}
        <input placeholder="Codigo de seguridad" type="text" />
        <button
          onClick={() => this.setState((prev) => ({ error: !prev.error }))}
        >
          Comprobar
        </button>
      </div>
    );
  }
}
