import './GridDefaultItem.scss';

interface GridDefaultItemProps {
  img: string;
  title: string;
  newprice: string;
  oldprice: string;
}

export const GridDefaultItem = (props: GridDefaultItemProps) => {
  const { img, title, newprice, oldprice } = props;
  return (
    <>
      <div className="boxes">
        <div className="chair-box">
          <div className="background-color">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about">
          <div className="about-title">
            <h3>{title}</h3>
          </div>
          <div className="color-button">
            <button className="button-orange"></button>
            <button className="button-pink"></button>
            <button className="button-blue"></button>
          </div>
          <div className="price">
            <p>${newprice}</p>
            <del>${oldprice}</del>
          </div>
        </div>
      </div>
    </>
  );
};
