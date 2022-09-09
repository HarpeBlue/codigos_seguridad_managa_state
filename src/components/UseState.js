import React, { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = useState({
    error: false,
    loading: false,
    value: "",
  });

  useEffect(() => {
    if (!!state.loading)
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          setState((prev) => ({ ...prev, error: true }));
        } else {
          setState((prev) => ({ ...prev, error: false }));
        }
        setState((prev) => ({ ...prev, loading: false }));
      }, 5000);
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {state.error && !state.loading && <p>"Error: el codigo es incorrecto"</p>}
      {state.loading && <p>"Cargando..."</p>}

      <input
        value={state.value}
        onChange={(event) =>
          setState((prev) => ({ ...prev, value: event.target.value }))
        }
        placeholder="Codigo de seguridad"
        type="text"
      />
      <button onClick={() => setState((prev) => ({ ...prev, loading: true }))}>
        Comprobar
      </button>
    </div>
  );
};
