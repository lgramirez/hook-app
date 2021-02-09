import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../../HookApp";
// para quitar el error de que no encuentra un adapter
import "../../setupTests";

describe("Pruebas en <HookApp />", () => {
  test("debe de mostrarse correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
