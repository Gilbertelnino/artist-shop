import React from 'react';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import './Cart.css';

function Cart({item, removeHandle}) {
  return (
    <div className="cart main">
      <div className="cart__container container">
        <div className="cart__image">
          <img src={item.image} alt={item.title} />
        </div>
        <Link to={`/product/${item.id}`} className="cart__name">
          <p>{item.title}</p>
        </Link>
        <p className="cart__price">{item.price} RWF</p>
        <select className="cart__select" value={item.qty}>
          {[...Array(item.countInStock).keys()].map((val) => (
            <option key={val + 1} value={val + 1}>
              {val + 1}
            </option>
          ))}
        </select>
        <button className="cart__delete" onClick={() => removeHandle(item.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Cart;
