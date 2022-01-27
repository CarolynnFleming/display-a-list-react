import React from 'react';
import membersList from './membersList.js';
import styles from './star-wars-list.module.css';

export default function StarWars({ troopLeader, img, totalMembers, members, side }) {
  console.log(img);
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
        <p>total members: {totalMembers}</p>
        <membersList members={members} />
      </div>
    </div>
  </div>;
}
