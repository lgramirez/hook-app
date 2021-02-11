import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
import "../../../setupTests";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  // para setear este counter antes de cada llamada del componente
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la informacion", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Gonzalo",
          quote: "Hola mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    // para verificar que llega el html con los datos mockeados del useFetch
    // console.log(wrapper.html());

    // buscaremos la clase alert del loading, como ya tenemos datos
    // no deberiamos tener esta clase en nuestro wrapper
    expect(wrapper.find(".alert").exists()).toBe(false);

    // buscaremos el texto de la clase mb-2 para ver si coincide con el
    // quote que mandamos en los datos mockeados
    expect(wrapper.find(".mb-2").text().trim()).toBe("Hola mundo");

    // buscaremos el texto de la etiqueta footer para ver si tiene el nombre
    // del author
    expect(wrapper.find("footer").text().trim()).toBe("Gonzalo");
  });
});
