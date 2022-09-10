import React, { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

const initialState = {
  error: false,
  loading: false,
  value: "",
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  CHANGE: {
    ...state,
    value: payload,
  },
  RESET: {
    ...initialState,
  },
  CONFIRM: {
    ...state,
    error: false,
    confirmed: true,
    loading: false,
  },
  DELETED: {
    ...state,
    deleted: true,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event) => {
    dispatch({ type: "CHANGE", payload: event.target.value });
  };
  const onCheck = () => {
    dispatch({ type: "CHECK" });
  };
  const onDeleted = () => {
    dispatch({ type: "DELETED" });
  };
  const onReset = () => {
    dispatch({ type: "RESET" });
  };
  console.log({ state });

  useEffect(() => {
    if (!!state.loading)
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          dispatch({ type: "ERROR" });
        } else {
          dispatch({ type: "CONFIRM" });
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
