import React from 'react';
import App from './App';
//import {render} from '@testing-library/react'

// it('render learn react link', () =>{
//   const {getByText} = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// })

const setUp = () => shallow(<App />);

describe('should render App component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain NavBar', () => {
    const wrapper = component.find("div");
    expect(wrapper.length).toBe(1);
  });
});