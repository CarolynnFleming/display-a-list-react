import React from 'react';
import CandyItem from './CandyItem.js';
import styles from './candy-style.module.css';

export default function CandyList(props) {
  return <div className={styles['candyland-list']}>
    {
      props.candyLand.map((candy, i) => <CandyItem key={i}{...candy}/>)
    }
  </div>;
}

