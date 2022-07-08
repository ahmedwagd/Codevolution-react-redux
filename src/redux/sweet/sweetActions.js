import { BUY_SWEET } from './sweetTypes';


export const buySweet = (number = 1) => {
  return {
    type: BUY_SWEET,
    payload: number
  }
}