import React from 'react';
import { connect } from 'react-redux'
import { buyCake, buyIceCream, buySweet } from '../redux';


function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const itemStateProps = () => {
    if (ownProps.cake) {
      return state.cake.numOfCakes
    } else if (ownProps.iceCream) {
      return state.iceCream.numOfIceCream
    } else {
      return state.sweet.numOfSweet
    }
  }
  const itemState = itemStateProps()
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatchProps = () => {
    if (ownProps.cake) {
      return () => dispatch(buyCake())
    } else if (ownProps.iceCream) {
      return () => dispatch(buyIceCream())
    } else {
      return () => dispatch(buySweet())
    }
  }
  const itemDispatch = itemDispatchProps()
  return {
    buyItem: itemDispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)