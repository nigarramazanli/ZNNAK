import './GridDefault.scss';
import { GridDefaultItem } from './GridDefaultItem';
import airpods from './components/photo/purepng1.png';
import bag from './components/photo/100111.png';
import camera from './components/photo/cam2.png';
import chair2 from './components/photo/image1164.png';
import clarity from './components/photo/clarity_grid-view-solid.png';
import graychair from './components/photo/image9.png';
import headphones from './components/photo/1111.png';
import list from './components/photo/Vector.png';
import pinkchair from './components/photo/image1165.png';
import smartwatch from './components/photo/unnamed1.png';
import watch from './components/photo/1562173100-movado-connect-15621730942.png';
import whitechair from './components/photo/image1173.png';
import wristwatch from './components/photo/watch.png';

export const GridDefault = () => {
  const products = [
    {
      id: 1,
      img: graychair,
      title: 'Vel elit euismod',
      newprice: '60.00',
      oldprice: '70.00',
    },
    {
      id: 2,
      img: pinkchair,
      title: 'Ultricies condimentum imperdiet',
      newprice: '65.00',
      oldprice: '75.00',
    },
    {
      id: 3,
      img: whitechair,
      title: 'Vitae suspendisse sed',
      newprice: '60.00',
      oldprice: '70.00',
    },
    {
      id: 4,
      img: bag,
      title: 'Sed at fermentum',
      newprice: '15.00',
      oldprice: '25.00',
    },
    {
      id: 5,
      img: smartwatch,
      title: 'Fusce pellentesque at',
      newprice: '21.00',
      oldprice: '33.00',
    },
    {
      id: 6,
      img: watch,
      title: 'Vestibulum magna laoreet',
      newprice: '23.00',
      oldprice: '36.00',
    },
    {
      id: 7,
      img: airpods,
      title: 'Sollicitudin amet orci',
      newprice: '20.00',
      oldprice: '30.00',
    },
    {
      id: 8,
      img: chair2,
      title: 'Ultrices mauris sit',
      newprice: '62.00',
      oldprice: '70.00',
    },
    {
      id: 9,
      img: wristwatch,
      title: 'Pellentesque condimentum ac',
      newprice: '20.00',
      oldprice: '25.00',
    },
    {
      id: 10,
      img: camera,
      title: 'Cras scelerisque velit',
      newprice: '43.00',
      oldprice: '55.00',
    },
    {
      id: 11,
      img: headphones,
      title: 'Lectus vulputate faucibus',
      newprice: '25.00',
      oldprice: '35.00',
    },
    {
      id: 12,
      img: bag,
      title: 'Purus risus, ut',
      newprice: '15.00',
      oldprice: '25.00',
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
            <GridDefaultItem
              key={product.id}
              img={product.img}
              title={product.title}
              newprice={product.newprice}
              oldprice={product.oldprice}
            />
          ))}
        </div>
      </div>
    </>
  );
};
