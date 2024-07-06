import { useState } from 'react';
import FormInput from '../../components/FormInput';
import { LoginType } from '../../types';
import './Login.scss';
import homeImg from '/pablo-sign-in-1.png';
import Logo from '/lendsqr-logo.png';
import LogoImg from '/lendsr-Union.png';

const Login = () => {
  const [credentials, setCredentials] = useState<LoginType>({
    email: '',
    password: '',
  });

  const formInputs = [
    {
      id: 'mail',
      name: 'email',
      type: 'email',
      errorMessage: 'Enter a valid email address',
      regex: `^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,})$`,
      label: 'Email',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      errorMessage: 'Enter valid password',
      label: 'Password',
      regex: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='logo'>
          <img src={LogoImg} alt='LogoImg' className='logo-img' />
          <img src={Logo} alt='Logo' className='logo-name' />
        </div>
      </div>
      <div className='body'>
        <div className='left'>
          <div className='img-container'>
            <img src={homeImg} className='login-img' alt='image' />
          </div>
        </div>
        <div className='right'>
          <div className='form-container'>
            <div className='header'>
              <h2>Welcome!</h2>
              <p>Enter details to login</p>
            </div>
            <div className='form'>
              <form>
                {formInputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={credentials[input.name as keyof LoginType]}
                    onChange={onChange}
                  />
                ))}
                <p>FORGOT PASSWORD</p>
                <button type='submit'>LOG IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
