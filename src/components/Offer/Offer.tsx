import './Offer.scss';

interface IOfferItemProps {
  imagesrc: string;
  title: string;
  info: string;
}
export const Offer = (props: IOfferItemProps) => {
  const { imagesrc, title, info } = props;
  return (
    <div className="offer">
      <img src={imagesrc} alt="" />
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};
