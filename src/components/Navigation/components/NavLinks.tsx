import { NavLink } from "react-router-dom";
import { routes } from "../../../helpers/routes.helper";
import { CgShoppingCart } from "react-icons/cg";
import SearchBar from "./SearchBar";
import HeaderTitle from "./HeaderTitle";
import useAuth from "../../../auth/useAuth";
import ShowUsername from "../../ShowUsername";

interface IProps {
  nameApp: string;
}

export default function NavLinks({ nameApp }: IProps) {
  const { isLoggedIn, logout } = useAuth();
  return (
    <>
      <div className="nav__main-menu">
        <HeaderTitle nameApp={nameApp} className="no-mobile" />
        <SearchBar className="sm" container />
        <NavLink
          to={routes.products.home}
          className="nav__item header__nav-item"
          activeClassName="nav__item-active"
          children="Products"
          exact
        />
        <NavLink
          to={routes.cart}
          className="nav__item header__nav-item mobile"
          activeClassName="nav__item-active"
          children="Cart"
          exact
        />
      </div>
      <div className="nav__center-menu no-mobile">
        <SearchBar />
      </div>
      <div className="nav__last-menu">
        <NavLink
          to={routes.cart}
          className="nav__item header__nav-item cart no-mobile"
          activeClassName="nav__item-cart-active"
          exact
        >
          <CgShoppingCart />
          <span className="">Cart</span>
        </NavLink>
        {/* Rigth */}
        {isLoggedIn ? (
          <>
            <NavLink
              to={routes.profile.details}
              className="nav__item header__nav-item btn-left nav-btn"
              activeClassName="nav__item-active"
              children={<ShowUsername />}
            />
            <span
              className="nav__item header__nav-item btn-right nav-btn"
              children="Logout"
              onClick={logout}
            />
          </>
        ) : (
          <>
            <NavLink
              to={routes.login}
              className="nav__item header__nav-item btn-left nav-btn"
              activeClassName="nav__item-active"
              children="Login"
              exact
            />
            <NavLink
              to={routes.register}
              className="nav__item header__nav-item btn-right nav-btn"
              activeClassName="nav__item-active"
              children="Register"
              exact
            />
          </>
        )}
      </div>
    </>
  );
}
