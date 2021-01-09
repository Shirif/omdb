import { shallow } from "enzyme";
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

  it("should render pagination button", () => {
    const props = 50;
    component = shallow(<Pagination totalResults={props} />);
    const wrapper = component.find("li");
    expect(wrapper.length).toBe(props / 10);
  });


  it("calls click button", () => {
    useSelectorMock.mockReturnValue({page: "1"});
    const props = 50;
     
    component = shallow(<Pagination totalResults={props}/>);
    const wrapper = component.find("li").first().simulate("click", {
      target: {
        innerText: 1,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
