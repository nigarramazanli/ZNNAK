import './LogInPage.scss';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { baseUrl } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';

interface LogInFormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required('You must enter your email'),
    password: yup.string().required('You must enter your password'),
  })
  .required();

export const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<LogInFormData> = (data) => {
    console.log(data);
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="loginpage-container">
        <div className="login-page">
          <div className="headerandtext">
            <h1>Login</h1>
            <p>Please login using account detail bellow.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={errors.email ? 'email-form withError' : 'email-form'}>
              <label>
                <input
                  className="email-form1"
                  type="text"
                  placeholder="Email Addres"
                  {...register('email', { required: true })}
                />
                <p className="validation-Error">{errors.email?.message}</p>
              </label>
            </div>
            <div className={errors.password ? 'password-form withError' : 'password-form'}>
              <label>
                <input
                  className="password-form1"
                  type="text"
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
                <p className="validation-Error">{errors.password?.message}</p>
              </label>
            </div>
            <div className="forget-password">
              <a href="#!">Forgot your password?</a>
            </div>
            <button className="sign-in">Sign In</button>
            <div className="account">
              <p>
                Don’t have an Account?<a href="/signup">Create account</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
