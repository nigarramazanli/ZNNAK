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
      imgSrc1: item1, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 2, 
      imgSrc1: item2, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 3, 
      imgSrc1: item3, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 4, 
      imgSrc1: item4, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
  ], 
  [ 
    { 
      id: 2, 
      imgSrc1: item2, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 1, 
      imgSrc1: item1, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 4, 
      imgSrc1: item4, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 3, 
      imgSrc1: item3, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
  ], 
  [ 
    { 
      id: 3, 
      imgSrc1: item3, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 1, 
      imgSrc1: item1, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
    { 
      id: 2, 
      imgSrc1: item2, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
    }, 
 
    { 
      id: 4, 
      imgSrc1: item4, 
      marka1: 'Mini LCW Chair', 
      price1: 56, 
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
          <TopCategory imgSrc1={category.imgSrc1} marka1={category.marka1} price1={category.price1} /> 
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