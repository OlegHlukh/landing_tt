import { FC, PropsWithChildren } from 'react';
import styles from './container.module.scss';

interface ContainerProps extends PropsWithChildren {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
