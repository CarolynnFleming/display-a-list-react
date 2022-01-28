import React from 'react';
import styles from './hiddenLeaf-styles.module.css';

export default function HiddenLeafItem({ name, img }) {
  return <div className={styles['hiddenleaf-item']}> 
    <h1>{name}</h1>
    <img className={styles['ninja-img']}src={img}/>
    
  </div>;
}

//okay the way
