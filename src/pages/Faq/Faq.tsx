import './Faq.scss';
import { Array } from './components/array/array';

export const Faq = () => {
  return (
    <>
      <div className="faq-page">
        <div className="right">
          <div className="general-information">
            <div className="right-header">
              <h1>Generel Information</h1>
            </div>
            <div className="text-box-right">
              <div className="text-box">
                <Array
                  header={'Eu dictumst cum at sed euismood condimentum?'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
                  }
                />
              </div>
              <div className="text-box">
                <Array
                  header={'Magna bibendum est fermentum eros.'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
                  }
                />
              </div>
              <div className="text-box">
                <Array
                  header={'Odio muskana hak eris conseekin sceleton?'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
                  }
                />
              </div>
              <div className="text-box">
                <Array
                  header={'Elit id blandit sabara boi velit gua mara?'}
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="question-box">
            <div className="box">
              <div className="question-box-header">
                <h3>Ask a Question</h3>
              </div>
              <div className="anket">
                <div className="name">
                  <input typeof="text" placeholder="Your Name*"></input>
                </div>
                <div className="subject">
                  <input typeof="text" placeholder="Subject*"></input>
                </div>
                <div className="message">
                  <textarea placeholder="Type Your Message*"></textarea>
                </div>
              </div>
              <div className="button">
                <button className="send">
                  <p>Send Mail</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
