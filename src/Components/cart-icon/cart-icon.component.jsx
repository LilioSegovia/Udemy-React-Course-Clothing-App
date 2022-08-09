import { useContext} from "react"
import { CartContext} from "../../contexts/card.context" 

import {ShoppingIcon, CartIconContainer, ItemCount }from "./cart-icon.styles"

const CartIcon = () => {
    const { isCartOpen ,setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartIcon = () => setIsCartOpen(!isCartOpen)
    return (
        < CartIconContainer onClick={toggleIsCartIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon