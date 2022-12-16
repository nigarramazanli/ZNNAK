interface IShoppingCartProps {
  ShoppingCartProduct: string;
  btnx: string;
  ProductName: string;
  ProductColor: string;
  ProductSize: string;
  ShoppingCartPrice: number;
  minusBtn: string;
  numberOfItems: number;
  plusBtn: string;
  totalPrice: number;
  belowLine: string;
}
export const ShoppingCart = (props: IShoppingCartProps) => {
  const {
    ShoppingCartProduct,
    btnx,
    ProductName,
    ProductColor,
    ProductSize,
    ShoppingCartPrice,
    minusBtn,
    plusBtn,
    totalPrice,
    belowLine,
    numberOfItems
  } = props;
  return (
      <div className="ShoppingCartItem">
        <div className="ShoppingCartItemMain">
          <div className="ShoppingCartPhoto">
            <img className="ShoppingCartProduct" src={ShoppingCartProduct} alt="" />
            <img className="btnx" src={btnx} alt="" />
          </div>
          <div className="ShoppingCartInfo">
            <p className="ProductName">{ProductName}</p>
            <p className="ProductColor">{ProductColor}</p>
            <p className="ProductSize">{ProductSize}</p>
          </div>
          <p className="ShoppingCartPrice">${ShoppingCartPrice}.00</p>
          <div className="ShoppingCartButton">
            <button className="minusBtn">{minusBtn}</button>
            <p className="numberOfItems">{numberOfItems}</p>
            <button className="plusBtn">{plusBtn}</button>
          </div>
          <p className="totalPrice">${totalPrice}.00</p>
        </div>
        <img className="belowLine" src={belowLine} alt="" />
      </div>
  );
};
