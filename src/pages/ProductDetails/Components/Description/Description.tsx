import './Description.scss';
import descriptionarrow from './photos/Group.svg';
export const Description =()=>{
    return(
     <div className='description-container'>
       <div className='description'>
        <div className='first-line-description'>
            <p>Description</p>
            <p className='additional-information'>Additional Info</p>
            <p>Reviews</p>
            <p>Video</p>
        </div>
        <div className='varius-tempor'>
            <p className='varius-more-details'>Varius tempor.</p>
            <p className='varius-details-text'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        <div className='more-details'>
            <p className='varius-more-details'>More details</p>
            <div className='aliquam'>
                <img src={descriptionarrow} alt="" />
            <p className='varius-details-text'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='aliquam'>
                <img src={descriptionarrow} alt="" />
            <p className='varius-details-text'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='aliquam'>
                <img src={descriptionarrow} alt=""/>
            <p className='varius-details-text'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div className='aliquam'>
                <img src={descriptionarrow} alt=""/>
            <p className='varius-details-text'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
        </div>
       </div>
     </div>
    );
};