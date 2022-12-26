import './Header.scss';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Hekto from './Hekto.svg';
import heart from './Heart.svg';
import korzina from './Korzina.svg';
import lupa from './lupa.svg';
import message from './Message.svg';
import phone from './bx_bx-phone-call.svg';
import user from './carbon_user.svg';
import vector from './Vector.svg';

export const Header = () => {
  const headerState = useSelector((state: RootState) => state.header);
  return (
    <header>
      <div className="header-and-nav">
        <div className="header-bar">
          <div className="little-header-bar">
            <div className="contacts">
              <div className="contact">
                <img className="message" src={message} alt="" />
                <p className="numphon">mhhasanul@gmail.com</p>
              </div>
              <div className="contact">
                <img className="phone" src={phone} alt="" />
                <p className="numphon">(12345)67890</p>
              </div>
            </div>
            <div className="user-char">
              <div className="user-act">
                <p className="numphon">USD</p>
                <img className="vector" src={vector} alt="" />
              </div>
              <div className="user-act">
                {headerState.currentUser ? (
                  <div className="current-user">
                    {headerState.currentUser.name} {headerState.currentUser.lastName}
                  </div>
                ) : (
                  <Link className="numphon" to="/login">
                    Login
                  </Link>
                )}
                <img className="user" src={user} alt="" />
              </div>
              <div className="user-act">
                <p className="numphon">Wishlist</p>
                <img className="heart" src={heart} alt="" />
              </div>
              <Link to="/shopping-carts">
                <img className="korzina" src={korzina} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="big-navbar">
          <div className="navbar">
            <img className="hekto" src={Hekto} alt="" />
            <a className="navlink" href="/">
              Home <img className="little-vector" src={vector} alt="" />
            </a>
            <Link to="/about-us" className="nav-link">
              About us
            </Link>
            <Link to="./faq" className="nav-link">
              Faq
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="./contact-us" className="nav-link">
              Contact
            </Link>
            <form className="search-button">
              <input className="search" type="text" name="search" />
              <button className="lupa-button" type="submit">
                <img className="lupa" src={lupa} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
