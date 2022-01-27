import React from 'react';
import members from './members.js';

export default function membersList({ members }) {
  return <div className='members-lsit'>
    {members.map((members, i) => <members key={`${members.name}-${i}`} {...members} />)}
  </div>;
}
