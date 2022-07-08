import { BUY_SWEET } from './sweetTypes';


const initialSweetState = {
  numOfSweet: 100
}

const sweetReducer = (state = initialSweetState, action) => {
  switch (action.type) {
    case BUY_SWEET: {
      return {
        ...state,
        numOfSweet: state.numOfSweet - action.payload
      }
    }

    default: return state
  }
}
export default sweetReducer;