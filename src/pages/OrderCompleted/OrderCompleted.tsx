import './OrderCompleted.scss';
import check from './photo/Check.svg';
import clock from './photo/Clock.svg';
import company from './photo/Companies.png';
import ttrue from './photo/true.svg';
export const OrderCompleted = () => {
  return (
    <div className="ordered">
      <div className="ordered-small">
        <div className="ordered-small-one">
          <div className="ordered-small-top">
            <div className="ordered-top">
              <img className="clock" src={clock} alt="" />
              <div className="main-content">
                <img className="ttrue" src={ttrue} alt="" />
                <h1 className="yourOrder">Your Order Is Completed! </h1>
                <p className="yourInfo">
                  Thank you for your order! Your order is being processed and will be completed within 3-6
                  hours. You will receive an email confirmation when your order is completed.
                </p>
                <a href="/shopping-carts">
                <button className="orderBtn">Continue Shopping</button>
                </a>
              </div>
              <img className="check" src={check} alt="" />
            </div>
          </div>
        </div>
        <div className="ordered-small-two">
          <img className="company" src={company} alt="" />
        </div>
      </div>
    </div>
  );
};
