import { useEffect, useState } from 'react';
import style from '../css/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isNavOn ? 'hidden' : 'auto';
  }, [isNavOn]);

  const toggleNav = () => {
    setIsNavOn(!isNavOn);
  };
  const closeNav = () => {
    setIsNavOn(false);
  };

  return (
    <header className={`${style.hd} mw`}>
      <h1>
        <Link onClick={closeNav} to="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </h1>
      <nav className={isNavOn ? `${style.on}` : ''}>
        <div className={style.gnb}>
          <Link onClick={closeNav} to="/shopall">
            shop
          </Link>
          <Link onClick={closeNav} to="#">
            blog
          </Link>
          <Link onClick={closeNav} to="/Company/Ceo">
            our story
          </Link>
        </div>
        <div className={style.person}>
          <Link onClick={closeNav} to="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link onClick={closeNav} to="/Cart">
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
          <Link onClick={closeNav} to="#">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
      </nav>
      <button className={style.ham} onClick={toggleNav}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;
