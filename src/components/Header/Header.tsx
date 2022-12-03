import './Header.css';
import Hekto from './Hekto.svg';
import heart from './Heart.svg';
import korzina from './Korzina.svg';
import lupa from './lupa.svg';
import message from './Message.svg';
import phone from './bx_bx-phone-call.svg';
import user from './carbon_user.svg';
import vector from './Vector.svg';

export const Header = () => {
  return (
    <header>
      <div className="header-and-nav">
        <div className="header-bar">
          <div className="little-header-bar">
            <div className="contacts">
              <div className="contact">
                <img className="message" src={message} alt="" />
                <p>mhhasanul@gmail.com</p>
              </div>
              <div className="contact">
                <img className="phone" src={phone} alt="" />
                <p>(12345)67890</p>
              </div>
            </div>
            <div className="user-char">
              <div className="user-act">
                <p>USD</p>
                <img className="vector" src={vector} alt="" />
              </div>
              <div className="user-act">
                <p>Login</p>
                <img className="user" src={user} alt="" />
              </div>
              <div className="user-act">
                <p>Wishlist</p>
                <img className="heart" src={heart} alt="" />
              </div>
              <img className="korzina" src={korzina} alt="" />
            </div>
          </div>
        </div>
        <div className="big-navbar">
          <div className="navbar">
            <img className="hekto" src={Hekto} alt="" />
            <nav>
              <a className="navlink" href="App.tsx">
                Home <img className="little-vector" src={vector} alt="" />
              </a>
              <a className="nav-link" href="App.tsx">
                Pages
              </a>
              <a className="nav-link" href="App.tsx">
                Products
              </a>
              <a className="nav-link" href="App.tsx">
                Blogs
              </a>
              <a className="nav-link" href="App.tsx">
                Shop
              </a>
              <a className="nav-link" href="App.tsx">
                Contact
              </a>
            </nav>
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
