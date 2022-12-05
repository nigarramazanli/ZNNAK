import './ShopexOffer.css'
import delivery from './free-delivery 1.png'
import cashback from './cashback 1.png'
import quality from './premium-quality 1.png'
import support from './24-hours-support 1.png'

export const ShopexOffer = () => {
    return(
        <div className='ShopexOffer'>
            <h1>What Shopex Offer!</h1>
            <div className='offers'>
                <div className='offer'>
                    <img src={delivery}/>
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Massa purus gravida.</p>
                </div>
                <div className='offer'>
                    <img src={cashback}/>
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Massa purus gravida.</p>
                </div>
                <div className='offer'>
                    <img src={quality}/>
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Massa purus gravida.</p>
                </div>
                <div className='offer'>
                    <img src={support}/>
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Massa purus gravida.</p>
                </div>
            </div>
        </div>
    )
};