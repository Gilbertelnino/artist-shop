import React from 'react';
import {useSelector} from 'react-redux';
import {
  albumSelector,
  getBasketPrice,
  getBasketQuantity,
} from '../../../features/album/albumSlice';
import './Subtotal.css';

function InCart() {
  const {basket} = useSelector(albumSelector);
  return (
    <div>
      <div className="subtotal__info">
        <p>Subtotal ({getBasketQuantity(basket)}) items</p>
        <p>{getBasketPrice(basket).toFixed(2)} RWF</p>
      </div>
    </div>
  );
}

export default InCart;
