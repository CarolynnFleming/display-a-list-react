import React from 'react';

export default function members({ color, name }) {
  return <div style={{ backgroundColor: color }}>
    {name}
  </div>;
}
