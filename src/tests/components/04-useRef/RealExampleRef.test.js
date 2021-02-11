import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import "../../../setupTests";

describe("Pruebas en <RealExampleRef />", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("debe de mostrar el componente <MultipleCustomHooks />", () => {
    const wrapper = shallow(<RealExampleRef />);
    const button = wrapper.find("button");

    button.simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
    // console.log(wrapper.html());
    // expect(wrapper.find(".alert").exists()).toBe(true);
  });
});
