import * as reactRedux from "react-redux";
import React from "react";
import NavBar from './NavBar';

const setUp = () => shallow(<NavBar />);
const testState = {
    movies: {
      myFavoritMovies: [],
      changeMovie: false,
      fetchMovies: { Error: "Search movie!" },
      searchData: {
        title: "",
        year: "",
        page: "",
      },
    },
    app: {
      loading: false,
      favorite: false,
    },
  };

describe("should render NavBar component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  let component;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
   });

  it("should contain .nav", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    useSelectorMock.mockReturnValue(false);
    component = setUp();
    const wrapper = component.find(".nav");
    expect(wrapper.length).toBe(1);
    // console.log(wrapper.debug());
  });
  it("should contain input fields", () => {
    useSelectorMock.mockReturnValue(false);
    component = setUp();
    const wrapper = component.find("input");
    expect(wrapper.length).toBe(2);
   });

   it("calls click FAVORITE button", () => {
     const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    component = setUp();
     const wrapper = component.find(".favorite-button").simulate("click");

    expect(dummyDispatch).toHaveBeenCalled();

  });
  
});