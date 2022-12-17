import './ProfilePage.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import pr1 from './Ecommerce accesories.png';
import pr2 from './Ecommerce accesories (1).png';
import pr3 from './Ecommerce accesories (2).png';
import pr4 from './Ecommerce accesories (3).png';
import pr5 from './Ecommerce accesories (4).png';
import pr6 from './Ecommerce accesories (5).png';
import pr7 from './Ecommerce accesories (6).png';
import pr8 from './Ecommerce accesories (7).png';
import user from './profile.png';

export const ProfilePage = () => {
  const profilePageState = useSelector((state: RootState) => state.profilePage);
  return (
    <div className="profile-page">
      <div className="back-color">
        <button>Edit Profile</button>
      </div>
      <div className="profile-page-container">
        <div className="about-user">
          <img src={user} alt="" />
          {profilePageState.currentUser && (
            <div className="user-data">
              <h2>
                {profilePageState.currentUser.name} {profilePageState.currentUser.lastName}
              </h2>
              <p>December 4, 2002</p>
            </div>
          )}
        </div>
        <div className="contact-info">
          <hr></hr>
          <h1>Contact Information:</h1>
          <div className="contact">
            <div>
              <p>Phone: </p>
              <p>Address: </p>
              <p>Email: </p>
            </div>
            <div className="random-info">
              <p>(12345)67890 </p>
              <p>525 E 68th Street, New York,NY 10651-78 156-187-98</p>
              <p>nigarakbrl@gmail.com </p>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="image-part">
          <h1>Collection</h1>
          <div className="product-img">
            <img src={pr1} alt="" />
            <img src={pr2} alt="" />
            <img src={pr3} alt="" />
            <img src={pr4} alt="" />
            <img src={pr5} alt="" />
            <img src={pr6} alt="" />
            <img src={pr7} alt="" />
            <img src={pr8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
