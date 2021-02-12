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
});
