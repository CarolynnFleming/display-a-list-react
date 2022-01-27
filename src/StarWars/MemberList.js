import React from 'react';
import Member from './Member.js';

export default function MemberList({ members }) {
  return <div className='member-list'>
    {members.map((member, i) => <Member key={`${member.name}-${i}`} {...member} />)}
  </div>;
}
