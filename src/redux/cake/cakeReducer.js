import { BUY_CAKE } from './cakeTypes'

const initiatState = {
  numOfCakes: 10
}

const cakeReducer = (state = initiatState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      }
    }
    default: {
      return state
    }
  }
}
export default cakeReducer;