import './SignUpPage.scss';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerr } from './signupPageSlice';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { baseUrl } from '../../constants';

interface signUpForm {
  username: string;
  email: string;
  password: string;
}
const schema = yup
  .object({
    username: yup.string().required('Username must be entered!'),
    email: yup.string().required('Email must be entered!'),
    password: yup.string().required('Password must be entered!'),
  })
  .required();

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<signUpForm> = (data) => {
    console.log(data);
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const dispatch = useDispatch();
  const registerClickHandler = () =>
    dispatch(
      registerr({
        name: 'Nigar',
        lastName: 'Akbarli',
        email: 'mail@mail.com',
        password: '12345',
      }),
    );
  return (
    <div className="signup">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={errors.username ? 'username-signup with-error' : 'username-signup'}>
            <input type="text" placeholder="Username" {...register('username', { required: true })} />
            <p className="validation-error">{errors.username?.message}</p>
          </div>
          <div className={errors.email ? 'username-signup with-error' : 'username-signup'}>
            <input type="email" placeholder="Email Address" {...register('email', { required: true })} />
            <p className="validation-error">{errors.email?.message}</p>
          </div>
          <div className={errors.password ? 'username-signup with-error' : 'username-signup'}>
            <input type="password" placeholder="Password" {...register('password', { required: true })}/>
            <p className="validation-error">{errors.password?.message}</p>
          </div>
          <button type="submit" onClick={registerClickHandler}>
            Sign Up
          </button>
        </form>
        <div className="login">
          <span>Already have an account?</span>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};
