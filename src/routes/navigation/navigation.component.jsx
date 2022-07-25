import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="">
        <div>Logo</div>
        <div className="links-container">
            <Link className="nav-link" to="shop">
                shop
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
