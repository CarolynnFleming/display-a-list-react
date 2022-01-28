import React from 'react';

export default function Member({ color, name }) {
  return <div style={{ backgroundColor: color }}>
    {name}
  </div>;
}
