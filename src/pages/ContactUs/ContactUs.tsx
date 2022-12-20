import './ContactUs.scss';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import hehehe from './photo/Group 124.svg';

interface ContactUsFormData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}
const schema = yup
  .object({
    firstName: yup.string().required('You must enter your name'),
    email: yup.string().required('You must enter your email'),
    subject: yup.string().required("You must enter your message's subject"),
    message: yup.string().required('Please write your message'),
  })
  .required();

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<ContactUsFormData> = (data) => console.log(data);

  return (
    <div className="contactUs">
      <div className="firstPart">
        <div className="firstPartOne">
          <h1 className="header-cu">Information About us</h1>
          <p className="paragraph-cu">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
            malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="smallCircles">
            <div className="sBlue"></div>
            <div className="sPink"></div>
            <div className="sCyan"></div>
          </div>
        </div>
        <div className="firstPartTwo">
          <h1 className="header-cu">Contact Way</h1>
          <div className="paragraph-cu-pic">
            <div className="paragraph-cu-pic-n">
              <div className="bBlue"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Tel: 877-67-88-99</p>
                <p className="paragraph-cu-one">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="paragraph-cu-pic-n">
              <div className="bPink"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Support Forum</p>
                <p className="paragraph-cu-one">For over 24hr</p>
              </div>
            </div>
          </div>
          <div className="paragraph-cu-pic">
            <div className="paragraph-cu-pic-n">
              <div className="bOrange"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">20 Margaret st, London</p>
                <p className="paragraph-cu-one">Great britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="paragraph-cu-pic-n">
              <div className="bGreen"></div>
              <div className="two-parag">
                <p className="paragraph-cu-one">Free standard shipping</p>
                <p className="paragraph-cu-one">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondPart">
        <div className="secondPartOne">
          <h1 className="headPart">Get In Touch</h1>
          <p className="paragPart">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat
            vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>
          <form className="inputs" onSubmit={handleSubmit(onSubmit)}>
            <div className="question-box">
              <div className="box">
                <div className="anket">
                  <div className="name">
                    <div className={errors.firstName ? 'naming withError' : 'naming'}>
                      <input className='naming'  typeof="text" placeholder="Your Name*" {...register('firstName', { required: true })}></input>
                      <p className="validationError">{errors.firstName?.message}</p>
                    </div>
                    
                    <div className={errors.email ? 'emailing withError' : 'emailing'}>
                      <input className='emailing'  typeof="email" placeholder="Your E-mail*" {...register('email', { required: true })}></input>
                      <p className="validationError">{errors.email?.message}</p>
                    </div>
                    
                  </div>
                  <div className={errors.subject ? 'subject withError' : 'subject'}>
                    <input className='subject'  typeof="text" placeholder="Subject*" {...register('subject', { required: true })}></input>
                  </div>
                  <p className="validationError">{errors.subject?.message}</p>
                  <div className={errors.message ? 'message-one with-error' : 'message-one'}>
                    <input className='message-one'  type=" text" placeholder="Type Your Message*" {...register('message', { required: true })}/>
                  </div>
                  <p className="validationError">{errors.message?.message}</p>
                </div>
                <div className="button">
                  <button className="send">Send Mail</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <img src={hehehe} alt="" />
      </div>
    </div>
  );
};
