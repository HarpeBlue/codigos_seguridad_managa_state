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

  useEffect(() => {
    if (!!state.loading)
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          setState((prev) => ({ ...prev, error: true }));
        } else {
          setState((prev) => ({ ...prev, error: false, confirmed: true }));
        }
        setState((prev) => ({ ...prev, loading: false }));
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
          onChange={(event) =>
            setState((prev) => ({ ...prev, value: event.target.value }))
          }
          placeholder="Codigo de seguridad"
          type="text"
        />
        <button
          onClick={() => setState((prev) => ({ ...prev, loading: true }))}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmacion, estas seguro?</p>
        <button
          onClick={() => setState((prev) => ({ ...prev, deleted: true }))}
        >
          Si, eliminar
        </button>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, confirmed: false, value: "" }))
          }
        >
          No, me arrepenti.
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito</p>
        <button
          onClick={() =>
            setState((prev) => ({
              ...prev,
              confirmed: false,
              deleted: false,
              value: "",
            }))
          }
        >
          Resetear, volver atras
        </button>
      </>
    );
  }
};
