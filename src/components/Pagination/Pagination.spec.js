import React from "react";
import * as reactRedux from "react-redux";
import Pagination from "./Pagination";

const setUp = () => shallow(<Pagination />);

describe("should render Pagination component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  let component;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    //component = setUp();
  });

  it("should contain .pagination", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    //expect(dummyDispatch).not.toHaveBeenCalled();
    useSelectorMock.mockReturnValue({});
    component = setUp();
    const wrapper = component.find(".pagination");
    expect(wrapper.length).toBe(1);
  });
});
