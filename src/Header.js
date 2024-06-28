import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <style>
        {`
          .header__logo {
            width: 50px;
            height: auto;
            object-fit: contain;
          }
        `}
      </style>
      <Link to="/">
        <img
          className="header__logo"
          src="https://resmim.net/cdn/2024/06/19/fUWpjM.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hoşgeldiniz {!user ? 'Kullanıcı' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Çıkış Yap' : 'Giriş Yap'}</span>
          </div>
        </Link>

        <Link to='/orderspage'>
          <div className="header__option">
            <span className="header__optionLineOne">Geri Dönüşler</span>
            <span className="header__optionLineTwo">& Siparişler</span>
          </div>
        </Link>
        
        <Link to='/caterpieprime'>
  <div className="header__option">
    <span className="header__optionLineOne">Caterpie</span>
    <span className="header__optionLineTwo">Prime</span>
  </div>
</Link>

        <Link to='/onerilen'>
        <div className="header__option">
          <span className="header__optionLineOne">Önerilen </span>
          <span className="header__optionLineTwo">Ürünler </span>
        </div>
        </Link>
        <Link to='/indirim'>
        <div className="header__option">
          <span className="header__optionLineOne">İndirimli</span>
          <span className="header__optionLineTwo">Ürünler</span>
        </div>
        </Link>
        <Link to='/Favorites'>
        <div className="header__option">
          <span className="header__optionLineOne">Favori</span>
          <span className="header__optionLineTwo">Ürünler</span>
        </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
