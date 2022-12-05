import './FeaturedProducts.css'
import chair1 from './chair1.png'
import chair2 from './chair2.png'
import chair3 from './chair3.png'
import chair4 from './chair4.png'
import group1 from './Group 141.png'
import group2 from './Group 141 (1).png'
import Rectangle1 from './Rectangle pink.png'
import Rectangle2 from './Rectangle pinkk.png'
import shopBasket from './shop.png'
import favicon from './uil_heart-alt.png'
import searchicon from './uil_search-plus.png'

export const FeaturedProducts = () => {
    return(
    <div className="FeaturedProducts">
      <h1>Featured Products</h1>
      <div className="chairs">
        <div className="chairBox">
          <div className="greybox">
            <img src={chair1} />
          </div>
          <div className="info">
            <h2>Cantilever chair</h2>
            <img src={group1}/>
            <p>Code - Y523201</p>
            <p>$42.00</p>
          </div>
        </div>
        <div className="chairBox">
            <div className="greybox">
              <div className="icons">
                <img src={shopBasket}/>
                <img src={favicon}/>
                <img src={searchicon}/>
              </div>
              <img src={chair2} />
              <div className='button'>
              <button>View Details</button>
              </div>
            </div>
          <div className="info">
            <h2>Cantilever chair</h2>
            <img src={group2}/>
            <p>Code - Y523201</p>
            <p>$49.00</p>
          </div>
        </div>
        <div className="chairBox">
            <div className="greybox">
            <img src={chair3} />
          </div>
          <div className="info">
            <h2>Cantilever chair</h2>
            <img src={group1}/>
            <p>Code - Y523201</p>
            <p>$40.00</p>
          </div>
        </div>
        <div className="chairBox">
            <div className="greybox">
            <img src={chair4}/>
          </div>
          <div className="info">
            <h2>Cantilever chair</h2>
            <img src={group1}/>
            <p>Code - Y523201</p>
            <p>$72.00</p>
          </div>
        </div>
      </div>
      <div className="pinkRectangles">
      <img src={Rectangle2}/>
      <img src={Rectangle1}/>
      <img src={Rectangle1}/>
      <img src={Rectangle1}/>
      </div>
      
    </div>
    )
};