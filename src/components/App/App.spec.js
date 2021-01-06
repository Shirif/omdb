import * as reactRedux from "react-redux";
import React from "react";
import App from "./App";

describe("should render App components", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const setUp = () => shallow(<App />);
  let component;
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

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
  it("should render NavBar, Description, Pagination components", () => {
    useSelectorMock.mockReturnValue(testState);
    component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render Spinner component", () => {
    useSelectorMock.mockReturnValue({ ...testState, app: {...testState.app, loading: true} });

    component = setUp();
    expect(component).toMatchSnapshot();
  });
});
