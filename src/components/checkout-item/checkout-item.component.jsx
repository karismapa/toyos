import React from 'react';
import { connect } from 'react-redux';

import { addItem, substractItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, substractItem, clearItem }) => {
  const { name, imageUrl, price, qty } = cartItem

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='qty'>
        <div
          className='arrow'
          onClick={() => substractItem(cartItem)}
        >&#10094;</div>
        <span className='value'>{qty}</span>
        <div
          className='arrow'
          onClick={() => addItem(cartItem)
        }>&#10095;</div>
      </span>
      <span className='price'> {price} </span>
      <div
        className='remove-button'
        onClick={() => clearItem(cartItem)}
      >&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  substractItem: item => dispatch(substractItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
