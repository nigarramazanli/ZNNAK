interface ITopCategoriesProps {
  imgSrc1: string;
  marka1: string;
  price1: number;
}
export const TopCategory = (props: ITopCategoriesProps) => {
  const { imgSrc1, marka1, price1 } = props;
  return (
    <div className="box-container">
      <div className="products-box">
        <img src={imgSrc1} alt="" />
      </div>
      <div className="information1">
        <h1 className="marka1">{marka1}</h1>
        <p className="prices1">${price1}.00</p>
      </div>
    </div>
  );
};
