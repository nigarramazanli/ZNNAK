import './TopCategories.css';
import item1 from './image 20.png';
import item2 from './image 1168.png';
import item3 from './image 1171.png';
import item4 from './image 21.png';


export const TopCategories =()=>{
    return(
        <div className='top-categories_container'>
            <h1 >Top Categories</h1>
            <div className='top-categories'>
                <div className='item1 circle'>
                <img src={item1} alt="..."/>
                <button className='viewshop'>View Shop</button>
                <p className='mini1'>Mini LCW Chair</p>
                <p className='prices1'>$56.00</p>
                </div>
                <div className='item2 circle'>
                <img src={item2} alt="..."/>
                <p className='mini'>Mini LCW Chair</p>
                <p className='prices'>$56.00</p>
                </div>
                <div className='item3 circle'>
                <img src={item3} alt="..."/>
                <p className='mini'>Mini LCW Chair</p>
                <p className='prices'>$56.00</p>
                </div>
                <div className='item4 circle'>
                <img src={item4} alt="..."/>
                <p className='mini'>Mini LCW Chair</p>
                <p className='prices'>$56.00</p>
                </div>
            </div>
            <div className='three-button'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        
        </div>
    );
};
