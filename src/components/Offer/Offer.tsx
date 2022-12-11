import './Offer.scss';

interface IOfferItemProps {
  imagesrc: string;
  title: string;
  p: string;
}
export const Offer = (props: IOfferItemProps) => {
  const { imagesrc, title, p } = props;
  return (
    <div className="offer">
      <img src={imagesrc} alt="" />
      <h3>{title}</h3>
      <p>{p}</p>
    </div>
  );
};
