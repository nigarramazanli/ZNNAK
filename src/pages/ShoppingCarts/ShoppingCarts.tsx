import './ShoppingCarts.scss';
import { RootState } from '../../store/store';
import { ShoppingCartItem } from './ShoppingCart/ShoppingCartItem';
import { useSelector } from 'react-redux';
import btnx from './photo/x-button.svg';
import icon1 from './photo/uil_check.svg';
import line from './photo/line.svg';
import product1 from './photo/product1.png';
import product2 from './photo/product2.png';
import product3 from './photo/product3.png';
import product4 from './photo/product4.png';
import product5 from './photo/product5.png';
const products = [
  {
    id: 1,
    shoppingCartProduct: product1,
    btnx: btnx,
    productName: 'Ut diam consequat',
    productColor: 'Color:Brown',
    productSize: 'Size:XL',
    shoppingCartPrice: 32.0,
    minusBtn: '-',
    numberOfItems: 1,
    plusBtn: '+',
    totalPrice: 219.0,
    belowLine: line,
  },
  {
    id: 2,
    shoppingCartProduct: product2,
    btnx: btnx,
    productName: 'Vel faucibus posuere',
    productColor: 'Color:Brown',
    productSize: 'Size:XL',
    shoppingCartPrice: 32.0,
    minusBtn: '-',
    numberOfItems: 1,
    plusBtn: '+',
    totalPrice: 219.0,
    belowLine: line,
  },
  {
    id: 3,
    shoppingCartProduct: product3,
    btnx: btnx,
    productName: 'Ac vitae vestibulum',
    productColor: 'Color:Brown',
    productSize: 'Size:XL',
    shoppingCartPrice: 32.0,
    minusBtn: '-',
    numberOfItems: 1,
    plusBtn: '+',
    totalPrice: 219.0,
    belowLine: line,
  },
  {
    id: 4,
    shoppingCartProduct: product4,
    btnx: btnx,
    productName: 'Elit massa diam',
    productColor: 'Color:Brown',
    productSize: 'Size:XL',
    shoppingCartPrice: 32.0,
    minusBtn: '-',
    numberOfItems: 1,
    plusBtn: '+',
    totalPrice: 219.0,
    belowLine: line,
  },
  {
    id: 5,
    shoppingCartProduct: product5,
    btnx: btnx,
    productName: 'Proin pharetra elementum',
    productColor: 'Color:Brown',
    productSize: 'Size:XL',
    shoppingCartPrice: 32.0,
    minusBtn: '-',
    numberOfItems: 1,
    plusBtn: '+',
    totalPrice: 219.0,
    belowLine: line,
  },
];

export const ShoppingCarts = () => {
  const cartPageState = useSelector((state: RootState) => state.cartPage);

  return (
    <>
      <div className="shopping-carts">
        <div className="shopping-carts-first">
          <div className="shopping-carts-text">
            <p className="shopping-carts-column">Product</p>
            <p className="shopping-carts-column">Price</p>
            <p className="shopping-carts-column">Quantity</p>
            <p className="shopping-carts-column">Total</p>
          </div>
          <div className="shopping-carts-items">
            {cartPageState.productsInCart.map((product, index) => (
              <ShoppingCartItem
                key={index}
                shoppingCartProduct={product.shoppingCartProduct}
                btnx={product.btnx}
                productName={product.productName}
                productColor={product.productColor}
                productSize={product.productSize}
                shoppingCartPrice={product.shoppingCartPrice}
                minusBtn={product.minusBtn}
                numberOfItems={product.numberOfItems}
                plusBtn={product.plusBtn}
                totalPrice={product.totalPrice}
                belowLine={product.belowLine}
              />
            ))}
          </div>
          <div className="shopping-carts-buttons">
            <button className="btn-cart">Clear Cart</button>
          </div>
        </div>
        <div className="shopping-carts-second">
          <h1 className="shopping-cartsH1">Cart Totals</h1>
          <div className="shopping-carts-second-up">
            <div className="shopping-carts-second-up-in">
              <div className="shopping-carts-second-up-in-par">
                <p>Subtotals:</p>
                <p>$219.00</p>
              </div>
              <img className="line-above" src={line} alt="" />
              <div className="shopping-carts-second-up-in-par">
                <p>Totals:</p>
                <p>$325.00</p>
              </div>
              <img className="line-above" src={line} alt="" />
              <div className="icon-and-text">
                <img className="icon1" src={icon1} alt="" />
                <p>Shipping & taxes calculated at checkout</p>
              </div>
              <button className="btn-green">Proceed To Checkout</button>
            </div>
          </div>
          <h1 className="shopping-cartsH2">Calculate Shopping</h1>
          <div className="shopping-carts-second-down">
            <div className="shopping-carts-second-down-in">
              <p className="Bangladesh">Bangladesh</p>
              <img className="line-small" src={line} alt="" />
              <p className="Dhaka">Mirpur Dhaka - 1200</p>
              <img className="line-small" src={line} alt="" />
              <p className="Postal">Postal Code</p>
              <img className="line-small" src={line} alt="" />
              <button className="btn-pink">Calculate Shiping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
