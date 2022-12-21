import './OurFeatures.scss';
import { Offer } from '../../../components/Offer/Offer';
import cashback from './cashback 1.png';
import delivery from './free-delivery 1.png';
import quality from './premium-quality 1.png';
import support from './24-hours-support 1.png';

export const OurFeatures = () => {
  return (
    <div className="OurFeatures">
      <h1>Our Features</h1>
      <div className="features">
        <div className="yellow">
          <Offer
            imagesrc={delivery}
            title={'Free Delivery'}
            info={
              'Why pay for shipping! You’re invited! Get Free Shipping. No minimums.  No coupon required.'
            }
          />
        </div>
        <div className="yellow">
          <Offer
            imagesrc={cashback}
            title={'100% Cash Back'}
            info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
          />
        </div>
        <div className="yellow">
          <Offer
            imagesrc={quality}
            title={'Quality Product'}
            info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
          />
        </div>
        <div className="yellow">
          <Offer
            imagesrc={support}
            title={'24/7 Support'}
            info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
          />
        </div>
      </div>
    </div>
  );
};
