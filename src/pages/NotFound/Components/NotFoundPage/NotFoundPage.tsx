import './NotFoundPage.scss';
import notfound from './photos/Group 269 (1).png';

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <div className="not-found-image">
        <img src={notfound} alt="" />
        <p>oops! The page you requested was not found!</p>
        <button className="not-found-button">Back To Home</button>
      </div>
    </div>
  );
};
