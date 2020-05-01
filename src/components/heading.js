import React from 'react';
import Avatar from '../components/avatar';

function Heading() {
  return (
    <h1 style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar />
      <span style={{ marginLeft: '1.35rem' }}>{`Hi 👋 I'm Dereck Quock`}</span>
    </h1>
  );
}

export default Heading;
