import React from 'react';
import styles from './soda.module.css';

export default function SodaItem(props) {
  return <div className={styles['soda-item']}>
    { props.sodaPop }
  </div>;
}

