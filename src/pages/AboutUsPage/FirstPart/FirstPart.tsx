import './FirstPart.scss';
import image from './Rectangle 56.png';

export const FirstPart = () => {
  return (
    <div className="first-part">
      <div className="about-us">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="right-part">
          <h2>Know About Our Ecomerce Business, History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
            malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};
