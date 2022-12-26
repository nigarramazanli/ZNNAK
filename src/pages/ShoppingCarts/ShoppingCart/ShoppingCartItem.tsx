import { useState } from 'react';

interface IShoppingCartProps {
  shoppingCartProduct: string;
  btnx: string;
  productName: string;
  productColor: string;
  productSize: string;
  shoppingCartPrice: number;
  minusBtn: string;
  numberOfItems: number;
  plusBtn: string;
  totalPrice: number;
  belowLine: string;
}
export const ShoppingCartItem = (props: IShoppingCartProps) => {
  const price = 32;
  const [totalValue, setTotalValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const increaseHandler = () => {
    setTotalValue((prev) => prev + price);
    setAmount((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    setTotalValue((prev) => prev - price);
    setAmount((prev) => prev - 1);
  };

  const {
    shoppingCartProduct,
    btnx,
    productName,
    productColor,
    productSize,
    shoppingCartPrice,
    minusBtn,
    plusBtn,
    totalPrice,
    belowLine,
    numberOfItems,
  } = props;
  return (
    <div className="shopping-cart-item">
      <div className="shopping-cart-item-main">
        <div className="shopping-cart-photo">
          <img className="shopping-cart-product" src={shoppingCartProduct} alt="" />
          <img className="btnx" src={btnx} alt="" />
        </div>
        <div className="shopping-cart-info">
          <p className="product-name">{productName}</p>
          <p className="product-color">{productColor}</p>
          <p className="product-size">{productSize}</p>
        </div>
        <p className="shopping-cart-price">${shoppingCartPrice}.00</p>
        <div className="shopping-cart-button">
          <button className="minus-btn" onClick={decreaseHandler}>
            {minusBtn}
          </button>
          <p className="number-of-items">{amount}</p>
          <button className="plus-btn" onClick={increaseHandler}>
            {plusBtn}
          </button>
        </div>
        <p className="total-price">${totalValue}.00</p>
      </div>
      <img className="below-line" src={belowLine} alt="" />
    </div>
  );
};
