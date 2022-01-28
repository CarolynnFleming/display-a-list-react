import React from 'react';
import styles from './candy-style.module.css';

export default function CandyItem({ name, age, img }) {
  return <div className={styles['candy-item']}>
    <h1>{name}</h1>
    <div className={styles['candy-info']}>
      <p>{age}</p>
      <img src= {img}/>
    </div>

  </div>;
}

