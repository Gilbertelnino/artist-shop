import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  albumSelector,
  removeFromBasket,
} from '../../../features/album/albumSlice';
import Cart from '../Cart';
import InCart from './InCart';
import './Subtotal.css';

function Subtotal() {
  const {basket} = useSelector(albumSelector);
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="subtotal">
      <div className="subtotal__container container">
        <div className="subtotal__left">
          <h2>Shopping Cart</h2>
          {basket.length === 0 ? (
            <div>
              Your Cart is empty <a href="/">Go Back</a>
            </div>
          ) : (
            basket.map((val) => (
              <div key={val.id}>
                <Cart item={val} removeHandle={removeItemFromBasket} />
              </div>
            ))
          )}
        </div>
        <div className="subtotal__right">
          <InCart />
          <div>
            <Link to="/checkout">
              <button className="checkout__button">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
