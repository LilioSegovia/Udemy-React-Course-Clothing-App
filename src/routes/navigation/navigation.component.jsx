import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer,NavLink,NavLinks,LogoContainer} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen }= useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
              ) : (<NavLink to="/auth">
              SIGN IN
            </NavLink>
            )
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
