/* eslint-disable jsx-a11y/anchor-is-valid */
import './leatest.scss'
import img1 from './photo/img1.png';
import img2 from './photo/img2.png'
import img3 from './photo/img3.png';

export const Leatest =() =>{
    return(
        <>
        <div className="leatest">
            <h1 className='header-title'>Leatest Blog</h1>
        <div className="card-group">
  <div className="card">
    <img src={img1} className="card-img-top" alt="..."/>
    <div className='card-about'>
      <div className='card-name'>SaberAli</div>
      <div className='card-date'>21 August,2020</div>
    </div>
    <div className="card-body">
      <h3 className="card-title">Top essential Trends in 2021</h3>
      <p className="card-text">More off this less hello samlande lied much<br/>
    over tightly circa horse taped mightly</p>
      <a href="#" className='read-more'>Read More</a>
    </div>
  </div>
  <div className="card">
    <img src={img2} className="card-img-top" alt="..."/>
    <div className='card-about'>
      <div className='card-name'>Surfauxion</div>
      <div className='card-date'>21 August,2020</div>
    </div>
    <div className="card-body">
      <h3 className="card-title">Top esssential Trends in 2021</h3>
      <p className="card-text">More off this less hello samlande lied much<br/>
    over tightly circa horse taped mightly</p>
    <a href="#" className='read-more'>Read More</a>
    </div>
  </div>
  <div className="card">
    <img src={img3} className="card-img-top" alt="..."/>
    <div className='card-about'>
      <div className='card-name'>SaberAli</div>
      <div className='card-date'>21 August,2020</div>
    </div>
    <div className="card-body">
      <h3 className="card-title" >Top essential Trends in 2021</h3>
      <p className="card-text">More off this less hello samlande lied much<br/>
    over tightly circa horse taped mightly</p>
    <a href="#" className='read-more'>Read More</a>
    </div>
  </div>
</div>
        </div>
        </>
    )
}