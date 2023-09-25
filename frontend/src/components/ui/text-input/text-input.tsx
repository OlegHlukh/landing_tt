import { FC, InputHTMLAttributes, ReactNode } from 'react';
import './text-input.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const TextInput: FC<TextInputProps> = ({ icon, ...rest }) => {
  return (
    <div className='input-container'>
      {icon && <i className='input-container__icon'>{icon}</i>}
      <input className={'input-container__input'} {...rest} type='text' />
    </div>
  );
};

export default TextInput;
