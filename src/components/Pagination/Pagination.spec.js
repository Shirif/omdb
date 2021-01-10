import React from "react";
import * as reactRedux from "react-redux";
import Pagination from "./Pagination";

const testState = {
  title: "test",
  year: "2000",
  page: "1",
};
const testProps = 50;
const setUp = () => shallow(<Pagination totalResults={testProps} />);

describe("should render Pagination component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  let component;

  it("calls from the click of a button", () => {
    useSelectorMock.mockReturnValue(testState);
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    component = setUp();
    const wrapper = component
      .find("li")
      .first()
      .simulate("click", {
        target: {
          innerText: 1,
        },
      });
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it("should contain .pagination", () => {
    const wrapper = component.find(".pagination");
    expect(wrapper.length).toBe(1);
  });

  it("should render pagination buttons", () => {
    const wrapper = component.find("li");
    expect(wrapper.length).toBe(testProps / 10);
  });

  it("should render pagination active button", () => {
    const wrapper = component.find(".active");
    expect(wrapper.length).toBe(1);
  });
});
