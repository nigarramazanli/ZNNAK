import './GridDefault.scss';
import { GridDefaultItem } from './GridDefaultItem';
import clarity from './components/photo/clarity_grid-view-solid.png';
import img1 from './components/photo/image9.png';
import img10 from './components/photo/cam2.png';
import img11 from './components/photo/1111.png';
import img2 from './components/photo/image1165.png';
import img3 from './components/photo/image1173.png';
import img4 from './components/photo/100111.png';
import img5 from './components/photo/unnamed1.png';
import img6 from './components/photo/1562173100-movado-connect-15621730942.png';
import img7 from './components/photo/purepng1.png';
import img8 from './components/photo/image1164.png';
import img9 from './components/photo/watch.png';
import list from './components/photo/Vector.png';

export const GridDefault = () => {
  const products = [
    {
      id: 1,
      img: img1,
      title: 'Vel elit euismod',
    },
    {
      id: 2,
      img: img2,
      title: 'Ultricies condimentum imperdiet',
    },
    {
      id: 3,
      img: img3,
      title: 'Vitae suspendisse sed',
    },
    {
      id: 4,
      img: img4,
      title: 'Sed at fermentum',
    },
    {
      id: 5,
      img: img5,
      title: 'Fusce pellentesque at',
    },
    {
      id: 6,
      img: img6,
      title: 'Vestibulum magna laoreet',
    },
    {
      id: 7,
      img: img7,
      title: 'Sollicitudin amet orci',
    },
    {
      id: 8,
      img: img8,
      title: 'Ultrices mauris sit',
    },
    {
      id: 9,
      img: img9,
      title: 'Pellentesque condimentum ac',
    },
    {
      id: 10,
      img: img10,
      title: 'Cras scelerisque velit',
    },
    {
      id: 11,
      img: img11,
      title: 'Lectus vulputate faucibus',
    },
    {
      id: 12,
      img: img4,
      title: 'Purus risus, ut',
    },
  ];
  return (
    <>
      <div className="griddefault">
        <div className="grid-default-navbar">
          <div className="left">
            <div className="header">
              <h2>Ecommerce Acceories & Fashion item </h2>
            </div>
            <div className="text">
              <sub>About 9,620 results (0.62 seconds)</sub>
            </div>
          </div>
          <div className="right">
            <div className="per-page">
              <p>Per Page:</p>
              <input></input>
            </div>
            <div className="sort">
              <label htmlFor="a">Sort By:</label>
              <select>
                <option>Best Match</option>
                <option>Worst Match</option>
                <option>Cheapest Match</option>
                <option>Expensive Match</option>
              </select>
            </div>
            <div className="view">
              <p>View:</p>
              <div className="icon">
                <img src={list} alt="" />
                <img src={clarity} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          {products.map((product) => (
            <GridDefaultItem img={product.img} title={product.title} />
          ))}
        </div>
      </div>
    </>
  );
};
