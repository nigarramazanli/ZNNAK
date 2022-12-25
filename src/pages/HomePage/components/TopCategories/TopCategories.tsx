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
      marka: 'Comfort Handy Craft',
      priceofitem: 70,
    },
    {
      id: 2,
      imgSrcc: item2,
      marka: 'Wood Chair',
      priceofitem: 80,
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
      marka: 'Cantilever chair',
      priceofitem: 50,
    },
  ],
  [
    {
      id: 2,
      imgSrcc: item2,
      marka: 'Wood Chair',
      priceofitem: 40,
    },
    {
      id: 1,
      imgSrcc: item1,
      marka: 'Comfort Handy Craft',
      priceofitem: 45,
    },
    {
      id: 4,
      imgSrcc: item3,
      marka: 'Cantilever chair',
      priceofitem: 100,
    },
    {
      id: 3,
      imgSrcc: item2,
      marka: 'Mini LCW Chair',
      priceofitem: 95,
    },
  ],
  [
    {
      id: 3,
      imgSrcc: item1,
      marka: 'Mini LCW Chair',
      priceofitem: 37,
    },
    {
      id: 1,
      imgSrcc: item3,
      marka: 'Comfort Handy Craft',
      priceofitem: 54,
    },
    {
      id: 2,
      imgSrcc: item2,
      marka: 'Wood Chair',
      priceofitem: 70,
    },

    {
      id: 4,
      imgSrcc: item4,
      marka: 'Cantilever chair',
      priceofitem: 50,
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
          <TopCategory
            key={category.id}
            imgSrcc={category.imgSrcc}
            marka={category.marka}
            priceofitem={category.priceofitem}
          />
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
