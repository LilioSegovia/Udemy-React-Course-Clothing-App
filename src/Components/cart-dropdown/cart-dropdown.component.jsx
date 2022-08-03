import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const {addItemToCart} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart}>Go To Check Out</Button>
    </div>
  );
};

export default CartDropdown;