import './Unique.scss';
import furniture from './furniture.png';
import ellipsered from './Ellipse65.svg' ;
import ellipsecyan from './Ellipse67.svg' ;
import ellipse from './Ellipse.svg';
export const Unique = () => {
  return (
    <div className="unique">
      <div className="unique-main">
        <img className="furniture" src={furniture} alt="" />
        <div className="information">
          <p className='unique-features'>Unique Features Of leatest & Trending Poducts</p>
          <div className='for-margin'>
            <img className='red' src={ellipsered} alt="" />
            <span className='unique-text-one'>All frames constructed with hardwood solids and laminates</span>
            </div>
          <div className='for-margin'>
            <img className='blue' src={ellipse} alt="" />
            <span className='unique-text-two'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
            </div>
          <div className='for-margin-two'>
            <img className='cyan' src={ellipsecyan} alt="" />
            <span className='unique-text-three'>Arms, backs and seats are structurally reinforced</span>
            </div>
          <div className='button-and-value'>
            <button className='button-add'>Add To Cart</button>
            <div className='brend-value'>
                <p className='brend'>B&B Italian Sofa </p>
                <p className='value'>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
