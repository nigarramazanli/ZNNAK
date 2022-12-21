interface ITopCategoriesProps {
  imgSrcc: string;
  marka: string;
  priceofitem: number;
}
export const TopCategory = (props: ITopCategoriesProps) => {
  const { imgSrcc, marka, priceofitem } = props;
  return (
    <div className="box-container">
      <div className="products-box">
        <img src={imgSrcc} alt="" />
      </div>
      <div className="information1">
        <h1 className="marka1">{marka}</h1>
        <p className="prices1">${priceofitem}.00</p>
      </div>
    </div>
  );
};
