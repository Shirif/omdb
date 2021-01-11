import * as reactRedux from "react-redux";
import React from "react";
import NavBar from "./NavBar";

const setUp = () => shallow(<NavBar />);

describe("should render NavBar component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  let component;
  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should contain .nav", () => {
    useSelectorMock.mockReturnValue(false);
    component = setUp();
    const wrapper = component.find(".nav");
    expect(wrapper.length).toBe(1);
  });

  it("should contain input fields", () => {
    useSelectorMock.mockReturnValue(false);
    component = setUp();
    const wrapper = component.find("input");
    expect(wrapper.length).toBe(2);
  });

  it("calls onchange", () => {
    useSelectorMock.mockReturnValue(false);
    component = setUp();
       const wrapper = component.find("input").first();
    wrapper.simulate("change", {
      target: {
        name: "year",
        value: "2000",
      },
    });
    expect(component).toMatchSnapshot();
  });

  it("calls click submit", () => {
    useSelectorMock.mockReturnValue(false);
    component = setUp();
    const wrapper = component.find("form");
    wrapper.simulate("submit", {
      preventDefault: () => {},
    });
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it("calls click FAVORITE button", () => {
    component = setUp();
    const wrapper = component.find(".favorite-button");
    wrapper.simulate("click");
    expect(dummyDispatch).toHaveBeenCalled();
  });
});
