import './ShopexOffer.scss';
import { Offer } from '../../../../components/Offer/Offer';
import cashback from './cashback 1.png';
import delivery from './free-delivery 1.png';
import quality from './premium-quality 1.png';
import support from './24-hours-support 1.png';

export const ShopexOffer = () => {
  return (
    <div className="shopex-offer">
      <h1>What Shopex Offer!</h1>
      <div className="offers">
        <Offer
          imagesrc={delivery}
          title={'Free Delivery'}
          info={'Why pay for shipping! You’re invited! Get Free Shipping. No minimums.  No coupon required.'}
        />
        <Offer
          imagesrc={cashback}
          title={'100% Cash Back'}
          info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
        />
        <Offer
          imagesrc={quality}
          title={'Quality Product'}
          info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
        />
        <Offer
          imagesrc={support}
          title={'24/7 Support'}
          info={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Massa purus gravida.'}
        />
      </div>
    </div>
  );
};
