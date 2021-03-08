import React from 'react';
import Spinner from './Spinner';

const setUp = () => shallow(<Spinner />);

describe('should render Spinner component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .spinner', () => {
    const wrapper = component.find('.spinner');
    expect(wrapper.length).toBe(1);
  });
});
