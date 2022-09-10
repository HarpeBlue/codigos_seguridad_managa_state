import React, { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = useState({
    error: false,
    loading: false,
    value: "",
    deleted: false,
    confirmed: false,
  });

  const onChange = (event) => {
    setState((prev) => ({ ...prev, value: event.target.value }));
  };

  const onConfirm = () => {
    setState((prev) => ({
      ...prev,
      error: false,
      confirmed: true,
      loading: false,
    }));
  };

  const onError = () => {
    setState((prev) => ({ ...prev, error: true, loading: false }));
  };

  const onCheck = () => {
    setState((prev) => ({ ...prev, loading: true }));
  };

  const onDeleted = () => {
    setState((prev) => ({ ...prev, deleted: true }));
  };

  const onReset = () => {
    setState((prev) => ({
      error: false,
      loading: false,
      value: "",
      deleted: false,
      confirmed: false,
    }));
  };

  useEffect(() => {
    if (!!state.loading)
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
      }, 5000);
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {state.error && !state.loading && (
          <p>"Error: el codigo es incorrecto"</p>
        )}
        {state.loading && <p>"Cargando..."</p>}

        <input
          value={state.value}
          onChange={onChange}
          placeholder="Codigo de seguridad"
          type="text"
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmacion, estas seguro?</p>
        <button onClick={onDeleted}>Si, eliminar</button>
        <button onClick={onReset}>No, me arrepenti.</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito</p>
        <button onClick={onReset}>Resetear, volver atras</button>
      </>
    );
  }
};
