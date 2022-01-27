import React from 'react';
import MemberList from './MemberList.js';
import styles from './star-wars-list.module.css';

export default function StarWars({ troopLeader, img, totalGroup, members, side }) {
  return <div className={styles['war-item']}>
    <h1>{side}</h1>
    <div>
      <div>
        <p>{troopLeader.name}</p>
        <p>{troopLeader.age}</p>
        <img src={troopLeader.img}/>
      </div>
      <div>
        <img src={img}/>
        <p>total Group: {totalGroup}</p>
        <MemberList members={members} />
      </div>
    </div>
  </div>;
}
