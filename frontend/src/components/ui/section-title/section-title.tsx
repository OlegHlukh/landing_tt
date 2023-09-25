import {FC} from "react";
import styles from './section-title.module.scss'

interface SectionTitleProps {
  title: string;
  strongTitle?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({title, strongTitle}) => {

  return <h2 className={styles.sectionTitle}>
    {title} {' '}
    <strong>{strongTitle}</strong>
  </h2>
}

export default SectionTitle;
