//import * as reactRedux from "react-redux";
import { useSelector } from "react-redux";
import React from "react";
import App from "./App";

const mockAppState = {
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

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

const setUp = () => shallow(<App />);
let component;

describe("should render App components", () => {


  it("should render NavBar, Description, Pagination components", () => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
    component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render ListMovies component", () => {
    useSelector.mockImplementation((callback) => {
      return callback({ ...mockAppState, movies: { ...mockAppState.movies, fetchMovies: {} } });
    });
    component = setUp();
    expect(component).toMatchSnapshot();
  });
  it("should render Spinner component", () => {
    useSelector.mockImplementation((callback) => {
      return callback({ ...mockAppState, app: { ...mockAppState.app, loading: true } });
    });
    component = setUp();
    const wrapper = component.find("Spinner");
    expect(wrapper.length).toBe(1);
  });
});

