import './ContactUs.scss';
import hehehe from './photo/Group 124.svg';

export const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="firstPart">
        <div className="firstPartOne">
          <h1 className="header-cu">Information About us</h1>
          <p className="paragraph-cu">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
            malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="smallCircles">
            <div className="sBlue"></div>
            <div className="sPink"></div>
            <div className="sCyan"></div>
          </div>
        </div>
        <div className="firstPartTwo">
          <h1 className="header-cu">Contact Way</h1>
          <div className="paragraph-cu-pic">
            <div className="paragraph-cu-pic-n">
              <div className="bBlue"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Tel: 877-67-88-99</p>
                <p className="paragraph-cu-one">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="paragraph-cu-pic-n">
              <div className="bPink"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Support Forum</p>
                <p className="paragraph-cu-one">For over 24hr</p>
              </div>
            </div>
          </div>
          <div className="paragraph-cu-pic">
            <div className="paragraph-cu-pic-n">
              <div className="bOrange"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">20 Margaret st, London</p>
                <p className="paragraph-cu-one">Great britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="paragraph-cu-pic-n">
              <div className="bGreen"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Free standard shipping</p>
                <p className="paragraph-cu-one">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondPart">
        <div className="secondPartOne">
          <h1 className="headPart">Get In Touch</h1>
          <p className="paragPart">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat
            vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>
          <form className="inputs" action="">
            <div className="question-box">
              <div className="box">
                <div className="anket">
                  <div className="name">
                    <input className='naming' typeof="text" placeholder="Your Name*"></input>
                    <input className='emailing' typeof="email" placeholder="Your E-mail*"></input>
                  </div>
                  <div >
                    <input className='subject' typeof="text" placeholder="Subject*"></input>
                  </div>
                  <div>
                    <input className='message-one' type=" text" placeholder='Type Your Message*' />
                  </div>
                </div>
                <div className="button">
                  <button className="send">
                    <p>Send Mail</p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <img src={hehehe} alt="" />
      </div>
    </div>
  );
};
