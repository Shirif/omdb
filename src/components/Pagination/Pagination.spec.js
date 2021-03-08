import React from 'react';
import * as reactRedux from 'react-redux';
import Pagination from './Pagination';

const mockAppState = {
  movies: {
    searchData: {
      title: 'test',
      year: '2000',
      page: '1'
    }
  }
};

const testProps = 50;
const setUp = () => shallow(<Pagination totalResults={testProps} />);
let component;

describe('should render Pagination component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('calls from the click of a button', () => {
    useSelectorMock.mockReturnValue(mockAppState.movies.searchData);
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    component = setUp();
    component
      .find('li')
      .at(1)
      .simulate('click', {
        target: {
          innerText: 1
        }
      });
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should contain .pagination', () => {
    const wrapper = component.find('.pagination');
    expect(wrapper.length).toBe(1);
  });

  it('should render pagination buttons', () => {
    const wrapper = component.find('li');
    expect(wrapper.length).toBe(testProps / 10 + 2);
  });

  it('should render pagination active button', () => {
    reactRedux.useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
    component = setUp();
    const wrapper = component.find('.active');
    expect(wrapper.length).toBe(1);
  });
});
