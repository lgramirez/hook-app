import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import "../../../setupTests";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoListItem />", () => {
  // crea una funcion simulada nueva y sin uso
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const index = 0;

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe de mostrarse correctamente, match con snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la funcion handleDelete", () => {
    const deleteButton = wrapper.find("button");
    deleteButton.simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de llamar la funcion handleToggle", () => {
    const paragraph = wrapper.find("p");
    paragraph.simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de mostrar el texto correctamente", () => {
    const paragraph = wrapper.find("p");

    expect(paragraph.text()).toBe(`${index + 1}. ${demoTodos[0].desc}`);
  });

  test("debe de tener la clase complete si el TODO.done = true", () => {
    const doneTodo = { ...demoTodos[0], done: true };

    const wrapper = shallow(
      <TodoListItem
        todo={doneTodo}
        index={index}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p.complete").exists()).toBe(true);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
