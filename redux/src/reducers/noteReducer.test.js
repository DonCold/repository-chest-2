import { noteReducer } from './noteReducer';

describe('Note Reducer', () => {
  test('return new state after edit', () => {
    const state = [
      {
        id: 1,
        title: 'test',
        content: 'test',
      },
      {
        id: 2,
        title: 'test 2',
        content: 'test 2',
      },
      {
        id: 3,
        title: 'test 3',
        content: 'test 3',
      }
    ]

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
})
