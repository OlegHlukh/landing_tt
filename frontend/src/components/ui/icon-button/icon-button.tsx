import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { inspect } from 'util';
import './icon-button.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <button className={'icon-button'} {...rest}>
      <span className={'icon-button__image'}>{icon}</span>
    </button>
  );
};

export default IconButton;
