import React, { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!!loading)
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          setError(true);
        } else {
          setError(false);
        }
        setLoading(false);
      }, 5000);
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {error && !loading && <p>"Error: el codigo es incorrecto"</p>}
      {loading && <p>"Cargando..."</p>}

      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Codigo de seguridad"
        type="text"
      />
      <button onClick={() => setLoading((prev) => !prev)}>Comprobar</button>
    </div>
  );
};
