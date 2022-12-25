import './hero.scss';
import { Link } from 'react-router-dom';
import armchair from './photo/armchair.png';
import ellipse1 from './photo/Ellipse60.png';
import ellipse2 from './photo/Ellipse61.png';
import ellipse3 from './photo/Ellipse62.png';
import lamp from './photo/lamp.png';
import vector from './photo/Vector14.png';

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <div className="lamp">
            <img className="lamp-img" src={lamp} alt="" />
          </div>
          <div className="ellipse-62">
            <img className="ellipse-pink" src={ellipse3} alt="" />
          </div>
          <div className="shop">
            <div className="text-box">
              <p className="first-text">Best Furniture For Your Castle....</p>
              <h1 className="title">
                New Furniture Collection
                <br />
                Trends in 2020
              </h1>
              <p className="second-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                <br />
                in phasellus non in justo.
              </p>
            </div>
            <div className="button-hero">
              <Link to="./shop" className="shop">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="armchair-blog">
            <img className="armchair" src={armchair} alt="" />
            <img className="ellipse-60" src={ellipse1} alt="" />
            <img className="ellipse-61" src={ellipse2} alt="" />
            <div className="vector-blue">
              <img className="vector" src={vector} alt="" />
              <p className="vector-text">
                50%
                <br />
                off
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
