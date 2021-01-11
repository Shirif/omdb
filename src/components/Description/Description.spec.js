import * as reactRedux from "react-redux";
import React from "react";
import Description from "./Description";

const testProps = { Year: "2000" };
const setUp = () => shallow(<Description changeMovie={testProps} />);

describe("should render Description component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  let component;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it("should contain .description-container", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue({});
    component = shallow(<Description changeMovie={{ Title: "" }} />);
    const wrapper = component.find(".description-container");
    expect(wrapper.length).toBe(1);
  });

  it("should rander noImg", () => {
    component = shallow(<Description changeMovie={{ Poster: "N/A" }} />);
    const wrapper = component.find(".poster-img");
    expect(wrapper.length).toBe(1);
  });

  it("should rander Year", () => {
    component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("calls click close button", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    component = setUp();
    const wrapper = component.find(".close-icon").simulate("click");
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it("should contain Error", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    useSelectorMock.mockImplementation((callback) => {
      return callback({
        movies: {
          fetchMovies: { Error: "Search movie!" },
        },
      });
    });
    component = setUp();
    expect(dummyDispatch).toHaveBeenCalledWith({ type: "NO_CHANGE_MOVIE" });
  });
});
