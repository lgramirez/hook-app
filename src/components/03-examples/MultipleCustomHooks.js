import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, error, data } = useFetch(url);
  // al devolver un null este retorna null pero necesitamos que retorne un bool
  // forzamos a que nos devuelva el bool negandolo dos veces para que sea falso
  // con una negacion !null devuelve true
  const { quote, author } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes with customHooks</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      {/* deshabilitar si carga */}
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente quote
      </button>
    </div>
  );
};
