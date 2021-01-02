import React from 'react';
import App from './App';

const setUp = () => shallow(<App />);

describe('should render App component', () => {
	let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain NavBar', () => {
    const wrapper = component.find("NavBar");
    expect(wrapper.length).toBe(1);
  });
});