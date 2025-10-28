const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'

const initialState = {
  value: 0,
}

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const incrementAsync = () => (dispatch) => {
  const delayMs = 800
  setTimeout(() => {
    dispatch(increment())
  }, delayMs)
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 }
    case DECREMENT:
      return { ...state, value: Math.max(0, state.value - 1) }
    default:
      return state
  }
}

