import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST } from './useTypes';
const initialUserState = {
  loading: false,
  users: [],
  error: ''
}
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    }
    case FETCH_USERS_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    }
    default: return state
  }
}
export default userReducer;