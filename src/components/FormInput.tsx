import './formInput.scss';
import { useState } from 'react';
import { FormInputType } from '../types';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    focused?: string;
  }
}

const FormInput = (props: FormInputType) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, type, ...inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setFocused(
      new RegExp(`${props.regex}`).test(props.value) === true ? false : true
    );
  };

  const showVisibilityIcon = () => {
    return showPassword ? (
      <span
        className='show-password-span'
        onClick={() => setShowPassword(!showPassword)}
      >
        HIDE
      </span>
    ) : (
      <span
        className='show-password-span'
        onClick={() => setShowPassword(!showPassword)}
      >
        SHOW
      </span>
    );
  };

  return (
    <div className='form-input-container'>
      <div className={'input-box ' + (focused && 'error')}>
        <input
          {...inputProps}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          className='form-input'
          id={id}
          onChange={onChange}
          onBlur={handleFocus} //onBlur===click and leave input
          onFocus={() => {
            inputProps.name === 'confirmPassword' && setFocused(true);
          }} //onFocus===click on input
          focused={focused.toString()}
        />
        <span className={'placeholder ' + (props.value && 'active')}>
          {label}
        </span>
        {props.type === 'password' ? showVisibilityIcon() : ''}
      </div>
      {focused && <span className='error-message'>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
