import './Logos.css';
import logos from './image 1174.png';
export const Logos =()=>{
    return(
        <div className='logos-container'>
            <div className='logos-image'>
                <img src={logos} alt="..."/>
            </div>
        </div>
    );
};