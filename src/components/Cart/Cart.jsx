import * as React from "react";
import { CartFooter, CartHeader, CartList, CartListItem, CartWrapper } from './Cart.style';
import { AppContext } from '../App';

const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>;



const Cart = () => {

  let totalPrice = 0;
  return <AppContext.Consumer>
    {context => {
      return <CartWrapper>
        <CartHeader>
          Cart ({context.cartItems.length})
        </CartHeader>
        <hr/>
        <CartList>
          {context.cartItems.length === 0 ? "No Items in Cart!" : ""}
          {
            context.cartItems.map((cartItem, index) => {
                totalPrice += cartItem.price;
                return <CartListItem key={index} isEven={index % 2 !== 0}>
                  <p>{cartItem.title}</p>
                  <button onClick={() => context.deleteItemFromCart(index)}>{deleteIcon}</button>
                </CartListItem>
              }
            )
          }
        </CartList>
        <CartFooter>

      <span>
        Price:
      </span>
          <span>
        {totalPrice} €
      </span>

        </CartFooter>

      </CartWrapper>
    }
    }

  </AppContext.Consumer>
};
export default Cart;
