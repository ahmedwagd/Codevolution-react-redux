import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySweet } from '../redux';


function SweetContainer() {
  const [number, setNumber] = useState(5);
  const numOfSweet = useSelector(state => state.sweet.numOfSweet);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of sweets - {numOfSweet}</h2>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buySweet(number))}>Sweet: {numOfSweet}</button>
    </div>
  )
}

export default SweetContainer