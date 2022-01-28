import React from 'react';
import styles from './hiddenLeaf-styles.module.css';
import HiddenLeafItem from './HiddenLeafItem.js';

export default function HiddenLeafList(props) {
  return <div className={styles['hiddenleaf-list']}>
    {
      props.hiddenLeaf.map((ninja, i) => <HiddenLeafItem key={i}{...ninja}/>)
    }
  </div>;
}

