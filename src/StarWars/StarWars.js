import React from 'react';
import MemberList from './MemberList.js';
import styles from './star-wars-list.module.css';

export default function StarWars({ troopLeader, img, totalGroup, members, side }) {
  return <div className={styles['war-saber']}>
    <h1>{side}</h1>
    <div className={styles['war-bottom']}>
      <div className={styles['troop-leader']}>
        <p>{troopLeader.name}</p>
        <p>{troopLeader.age}</p>
        <img src={troopLeader.img}/>
      </div>
      <div className={styles['other-stars']}>
        <img className={styles['war-img']} src={img}/>
        <p>total Group: {totalGroup}</p>
        <MemberList members={members} />
      </div>
    </div>
  </div>;
}
