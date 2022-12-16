import './ShoppingCarts.scss';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import btnx from './photo/x-button.svg';
import line from './photo/line.svg';
import product1 from './photo/product1.png';
import product2 from './photo/product2.png';
import product3 from './photo/product3.png';
import product4 from './photo/product4.png';
import product5 from './photo/product5.png';
import icon1 from './photo/uil_check.svg' ;

export const ShoppingCarts = () => {
  const products = [
    {
      id:1,
      ShoppingCartProduct: product1,
      btnx: btnx,
      ProductName: 'Ut diam consequat',
      ProductColor: 'Color:Brown',
      ProductSize: 'Size:XL',
      ShoppingCartPrice: 32.0,
      minusBtn: '-',
      numberOfItems: 1,
      plusBtn: '+',
      totalPrice: 219.0,
      belowLine: line,
    },
    {
      id:2,
      ShoppingCartProduct: product2,
      btnx: btnx,
      ProductName: 'Vel faucibus posuere',
      ProductColor: 'Color:Brown',
      ProductSize: 'Size:XL',
      ShoppingCartPrice: 32.0,
      minusBtn: '-',
      numberOfItems: 1,
      plusBtn: '+',
      totalPrice: 219.0,
      belowLine: line,
    },
    {
      id:3,
      ShoppingCartProduct: product3,
      btnx: btnx,
      ProductName: 'Ac vitae vestibulum',
      ProductColor: 'Color:Brown',
      ProductSize: 'Size:XL',
      ShoppingCartPrice: 32.0,
      minusBtn: '-',
      numberOfItems: 1,
      plusBtn: '+',
      totalPrice: 219.0,
      belowLine: line,
    },
    {
      id:4,
      ShoppingCartProduct: product4,
      btnx: btnx,
      ProductName: 'Elit massa diam',
      ProductColor: 'Color:Brown',
      ProductSize: 'Size:XL',
      ShoppingCartPrice: 32.0,
      minusBtn: '-',
      numberOfItems: 1,
      plusBtn: '+',
      totalPrice: 219.0,
      belowLine: line,
    },
    {
      id:5,
      ShoppingCartProduct: product5,
      btnx: btnx,
      ProductName: 'Proin pharetra elementum',
      ProductColor: 'Color:Brown',
      ProductSize: 'Size:XL',
      ShoppingCartPrice: 32.0,
      minusBtn: '-',
      numberOfItems: 1,
      plusBtn: '+',
      totalPrice: 219.0,
      belowLine: line,
    }
  ];

  return (
    <>
      <div className="ShoppingCarts">
        <div className="ShoppingCartsFirst">
          <div className="ShoppingCartsText">
            <p className="ShoppingCartsTextOne">Product</p>
            <p className="ShoppingCartsTextTwo">Price</p>
            <p className="ShoppingCartsTextThree">Quantity</p>
            <p className="ShoppingCartsTextFour">Total</p>
          </div>
          <div className="ShoppingCartsItems">
            {products.map((product ) => (
              <ShoppingCart
                ShoppingCartProduct={product.ShoppingCartProduct}
                btnx={product.btnx}
                ProductName={product.ProductName}
                ProductColor={product.ProductColor}
                ProductSize={product.ProductSize}
                ShoppingCartPrice={product.ShoppingCartPrice}
                minusBtn={product.minusBtn}
                numberOfItems={product.numberOfItems}
                plusBtn={product.plusBtn}
                totalPrice={product.totalPrice}
                belowLine={product.belowLine}
              />
            ))}
          </div>
          <div className="ShoppingCartsButtons">
            <button className="btn-cart">Update Curt</button>
            <button className="btn-cart">Clear Curt</button>
          </div>
        </div>
        <div className="ShoppingCartsSecond">
          <h1 className='ShoppingCartsH1'>Cart Totals</h1>
          <div className='ShoppingCartsSecondUp'>
            <div className='ShoppingCartsSecondUpIn'>
              <div className='ShoppingCartsSecondUpInPar'>
                <p>Subtotals:</p>
                <p>£219.00</p>
              </div>
              <img className='line-above' src={line} alt="" />
              <div className='ShoppingCartsSecondUpInPar'>
                <p>Totals:</p>
                <p>£325.00</p>
              </div>
              <img className='line-above' src={line} alt="" />
              <div className='icon-and-text'>
              <img className='icon1' src={icon1} alt="" />
              <p>Shipping & taxes calculated at checkout</p>
              </div>
                  <button className='btn-green'>Proceed To Checkout</button>
            </div>
          </div>
          <h1 className='ShoppingCartsH2'>Calculate Shopping</h1>
          <div className='ShoppingCartsSecondDown'>
                <div className='ShoppingCartsSecondDownIn'>
            <p className='Bangladesh'>Bangladesh</p>
            <img className='line-small' src={line} alt="" />
            <p className='Dhaka'>Mirpur Dhaka - 1200</p>
            <img className='line-small' src={line} alt="" />
            <p className='Postal'>Postal Code</p>
            <img className='line-small' src={line} alt="" />
            <button className='btn-pink'>Calculate Shiping</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
