import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
