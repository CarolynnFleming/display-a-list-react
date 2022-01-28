import React from 'react';
import styles from './soda.module.css';
import { sodaPop } from './Soda.js';

export default function SodaItem() {
  return <div className={styles['soda-item']}>
    <p>{sodaPop}</p>
  </div>;
}

