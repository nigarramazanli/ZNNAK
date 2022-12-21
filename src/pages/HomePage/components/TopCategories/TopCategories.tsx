import './TopCategories.scss'; 
import { TopCategory } from './TopCategory'; 
import { useState } from 'react'; 
import item1 from './photo/image 20.png'; 
import item2 from './photo/image 1168.png'; 
import item3 from './photo/image 1171.png'; 
import item4 from './photo/image 21.png'; 
 
const categories = [ 
  [ 
    { 
      id: 1, 
      imgSrcc: item1, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 2, 
      imgSrcc: item2, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 3, 
      imgSrcc: item3, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 4, 
      imgSrcc: item4, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
  ], 
  [ 
    { 
      id: 2, 
      imgSrcc: item2, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 1, 
      imgSrcc: item1, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 4, 
      imgSrcc: item4, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 3, 
      imgSrcc: item3, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
  ], 
  [ 
    { 
      id: 3, 
      imgSrcc: item3, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 1, 
      imgSrcc: item1, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
    { 
      id: 2, 
      imgSrcc: item2, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
 
    { 
      id: 4, 
      imgSrcc: item4, 
      marka: 'Mini LCW Chair', 
      priceofitem: 56, 
    }, 
  ], 
]; 
 
export const TopCategories = () => { 
  const [chosenCategory, setChosenCategory] = useState(0); 
 
  return ( 
    <div className="top-categories_container"> 
      <h1>Top Categories</h1> 
      <div className="top-categories"> 
        {categories[chosenCategory].map((category, index) => ( 
          <TopCategory key={category.id} imgSrcc={category.imgSrcc} marka={category.marka} priceofitem={category.priceofitem} /> 
        ))} 
      </div> 
      <div className="three-button"> 
        <button onClick={() => setChosenCategory(0)}></button> 
        <button onClick={() => setChosenCategory(1)}></button> 
        <button onClick={() => setChosenCategory(2)}></button> 
      </div> 
    </div> 
  ); 
};