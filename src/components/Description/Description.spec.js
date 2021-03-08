import * as reactRedux from 'react-redux';
import React from 'react';
import Description from './Description';

const testProps = { Year: '2000' };
const setUp = () => shallow(<Description changeMovie={testProps} />);

describe('should render Description component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  let component;
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should contain .container', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue({});
    component = shallow(<Description changeMovie={{ Title: '' }} />);
    const wrapper = component.find('.container');
    expect(wrapper.length).toBe(1);
  });

  it('should rander noImg', () => {
    component = shallow(<Description changeMovie={{ Poster: 'N/A' }} />);
    const wrapper = component.find('.poster');
    expect(wrapper.length).toBe(1);
  });

  it('should rander Year', () => {
    component = setUp();
    expect(component).toMatchSnapshot();
  });

  it('calls click close button', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
    component = setUp();
    component.find('.close').simulate('click');
    expect(dummyDispatch).toHaveBeenCalled();
  });
});
