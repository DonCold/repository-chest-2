import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, prettyDOM } from '@testing-library/react';

import Note from './Note';

describe('Note', () => {
  test('render content', () => {
    const note = {
      title: 'Test title',
      content: 'Test content',
      user: {
        name: 'Test user',
      }
    }

    const component = render(<Note content={note.content} title={note.title} user={note.user.name} />);
    component.getByText('Test title');
    // expect(component.container).toHaveTextContent(note.content);
  })

  test('Be a li', () => {
    const note = {
      title: 'Test title',
      content: 'Test content',
      user: {
        name: 'Test user',
      }
    }

    const component = render(<Note content={note.content} title={note.title} user={note.user.name} />);
    const li = component.container.querySelector('strong');
    console.log(prettyDOM(li));
  })
});
