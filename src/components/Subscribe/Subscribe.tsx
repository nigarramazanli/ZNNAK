import './Subscribe.css';
import subscribe from './Rectangle 102.png';
import logos from './image 1174.png';
export const Subscribe=()=>{
    return(
        <div className='subscribe-container'>
            <img className='image-subscribe' src={subscribe} alt="..."/>
            <div className='text-button'>
            <p>Get Leatest Update By Subscribe<br/>0ur Newslater</p>
            <button className='subscribe-button'>Shop now</button>
            </div>
        </div>
    );
};