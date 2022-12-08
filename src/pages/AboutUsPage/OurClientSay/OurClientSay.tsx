import './OurClientSay.scss';
import client1 from './OhKElOkQ3RE.svg';
import client2 from './GH-mSApoKO0.svg';
import client3 from './RukI4qZGlQs.svg';

export const OurClientSay = () => {
  return (
    <div className="our-client-say">
      <div className="our-client-container">
        <h1>Our Client Say!</h1>
        <div className="images">
          <img src={client1} alt='' />
          <img src={client2} alt='' />
          <img src={client3} alt=''/>
        </div>
        <h4>Selina Gomez</h4>
        <span>Ceo At Webecy Digital</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin{' '}
          <br />
          aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br />
          aliquam lacus volutpat praesent.
        </p>
      </div>
    </div>
  );
};
