import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Togglable from './Togglable';

describe('Togglable', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Togglable showLabel='test' hiddenLabel='close doc' >
        <div className="content">
          test content
        </div>
      </Togglable>
    )
  })

  test('renders its children', () => {
    expect(component.container).toHaveTextContent('test content');
  })

  test('renders with correct style', () => {
    const e = component.getByText('test content');
    expect(e.parentNode).toHaveStyle('display: none');
  })

  test('after clicking the button, renders children', () => {
    const button = component.getByText('test');
    fireEvent.click(button);

    expect(component.container).toHaveTextContent('test content');

    const e = component.getByText('test content');
    expect(e.parentNode).not.toHaveStyle('display: none');
  })

  test('after clicking the button, closed', () => {
    const button = component.getByText('test');
    const button2 = component.getByText('close doc');
    fireEvent.click(button);
    fireEvent.click(button2);

    const e = component.getByText('test content');
    expect(e.parentNode).toHaveStyle('display: none');
  })
});
