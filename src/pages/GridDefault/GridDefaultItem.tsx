import './GridDefaultItem.scss';

interface GridDefaultItemProps {
  img: string;
  title: string;
}

export const GridDefaultItem = (props: GridDefaultItemProps) => {
  const { img, title } = props;
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
            <p>$26.00 </p>
            <del>$42.00</del>
          </div>
        </div>
      </div>
    </>
  );
};
