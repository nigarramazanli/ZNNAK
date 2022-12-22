import './Faq.scss';
import * as yup from 'yup';
import { FaqItem } from './components/FaqItem';
import { Logos } from '../HomePage/components/Logos/Logos';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseUrl } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';

interface FaqFormData {
  name: string;
  subject: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required('You must enter your name'),
    subject: yup.string().required("You must enter your message's subject"),
    message: yup.string().required('Please write your message'),
  })
  .required();

export const Faq = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FaqFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FaqFormData> = (data) => {
    console.log(data);
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const faqs = [
    {
      id: 1,
      header: 'Eu dictumst cum at sed euismood condimentum?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
    },
    {
      id: 2,
      header: 'Magna bibendum est fermentum eros.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
    },
    {
      id: 3,
      header: 'Odio muskana hak eris conseekin sceleton?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
    },
    {
      id: 4,
      header: 'Elit id blandit sabara boi velit gua mara?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
    },
  ];
  return (
    <>
      <div className="faq-page">
        <div className="right">
          <div className="general-information">
            <div className="right-header">
              <h1>Generel Information</h1>
            </div>
            <div className="text-box-right">
              {faqs.map((faq) => (
                <FaqItem key={faq.id} header={faq.header} text={faq.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="left">
          <div className="question-box">
            <div className="box">
              <div className="question-box-header">
                <h3>Ask a Question</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="anket">
                  <div className={errors.name ? 'name-faq with-error' : 'name-faq'}>
                    <input
                      typeof="text"
                      placeholder="Your Name*"
                      {...register('name', { required: true })}
                    ></input>
                  </div>
                  <p className="validation-error">{errors.name?.message}</p>
                  <div className={errors.subject ? 'subject-faq with-error' : 'subject-faq'}>
                    <input
                      typeof="text"
                      placeholder="Subject*"
                      {...register('subject', { required: true })}
                    ></input>
                  </div>
                  <p className="validation-error">{errors.subject?.message}</p>
                  <div className={errors.message ? 'messages-faq with-error' : 'messages-faq'}>
                    <textarea
                      placeholder="Type Your Message*"
                      {...register('message', { required: true })}
                    ></textarea>
                  </div>
                  <p className="validation-error">{errors.message?.message}</p>
                </div>
                <div className="button-faq">
                  <button className="send-faq"> Send Mail</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Logos />
    </>
  );
};
