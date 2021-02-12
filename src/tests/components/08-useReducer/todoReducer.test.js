import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos, newTodo } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un TODO", () => {
    const state = todoReducer(demoTodos, { type: "add", payload: newTodo });

    expect(state.length).toBe(3);
    expect(state.find((item) => item.id === newTodo.id)).toEqual(newTodo);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe de borrar un TODO", () => {
    // action.payload = ID del TODO
    const state = todoReducer(demoTodos, { type: "delete", payload: 1 });

    expect(state.length).toBe(1);
    expect(state.find((item) => item.id === 1)).toBe(undefined);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("debe de hacer el TOGGLE del TODO", () => {
    // action.payload = ID del TODO
    const state = todoReducer(demoTodos, { type: "toggle", payload: 1 });

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
