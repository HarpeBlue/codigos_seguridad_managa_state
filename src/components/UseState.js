import React, { useEffect, useState } from "react";

export const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Empezando el efecto...");
    if (!!loading)
      setTimeout(() => {
        console.log("haciendo el efecto...");
        setLoading(false);
      }, 5000);
    console.log("terminando el efecto...");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {error && <p>"Error: el codigo es incorrecto"</p>}
      {loading && <p>"Cargando..."</p>}

      <input placeholder="Codigo de seguridad" type="text" />
      <button onClick={() => setLoading((prev) => !prev)}>Comprobar</button>
    </div>
  );
};
