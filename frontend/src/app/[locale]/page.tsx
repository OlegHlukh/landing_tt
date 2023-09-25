import Image from 'next/image';
import styles from '../page.module.scss';
import { useTranslations } from 'next-intl';
import HomePage from '@/pages/home';

export default function Home() {
  const t = useTranslations('home');

  return <HomePage />;
}
