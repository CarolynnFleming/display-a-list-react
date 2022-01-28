import React from 'react';
import StarWars from './StarWars.js';
import styles from './star-wars-list.module.css';

export default function StarWarsList(props) {
  return <div className={styles['star-wars-list']}>
    {
      props.starWars.map((war, i) => <StarWars key={i}{...war}/>)
    }

  </div>;
}
