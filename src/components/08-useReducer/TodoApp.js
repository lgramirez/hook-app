import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => {
              return (
                <li key={todo.id} className="list-group-item">
                  <p className="text-center">
                    {index + 1}. {todo.desc}
                  </p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form action="">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
            />
            <div class="d-grid gap-2 mt-1">
              <button class="btn btn-outline-primary" type="button">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
