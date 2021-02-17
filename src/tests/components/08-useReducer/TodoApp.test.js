import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);

    // al querer hacer una modificacion en el componente debemos envolver nuestras
    // acciones en un act, donde llamamos a handleAddTodo con un TODO para agregar
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe(
      `TodoApp ( ${demoTodos.length} )`
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("debe de eliminar un TODO", () => {
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
    });

    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp ( 0 )`);
  });
});
