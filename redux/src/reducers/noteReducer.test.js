import deepFreeze from 'deep-freeze';

import { noteReducer } from './noteReducer';

const state = [
  {
    id: 1,
    title: 'test',
    content: 'test',
    important: true,
  },
  {
    id: 2,
    title: 'test 2',
    content: 'test 2',
    important: true,
  },
  {
    id: 3,
    title: 'test 3',
    content: 'test 3',
    important: true,
  }
]

deepFreeze(state);

describe('Note Reducer', () => {
  test('return new state after edit', () => {
    const action = {
      type: '@notes/edit',
      payload: {
        id: 2,
        title: 'test 2 edit',
        content: 'test 2 edit',
      }
    }

    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(3)
    expect(newState).toContainEqual({
      id: 2,
      title: 'test 2 edit',
      content: 'test 2 edit',
    })
  })

  test('return the new state after toggle important', () => {
    const action = {
      type: '@notes/toggleImportant',
      payload: {
        id: 2,
      }
    }

    const newState = noteReducer(state, action)
    expect(newState).toHaveLength(3)
    expect(newState).toContainEqual({
      id: 2,
      title: 'test 2',
      content: 'test 2',
      important: false,
    })
  })
})
