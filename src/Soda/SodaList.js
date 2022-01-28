import React from 'react';
import styles from './soda.module.css';
import SodaItem from './SodaItem.js';

export default function SodaList(props) {
  return <div className={styles['soda-list']}>
    {
      props.sodaPop.map((soda, i) => <SodaItem key={i}{...soda}/>)
    }
  </div>;
}

