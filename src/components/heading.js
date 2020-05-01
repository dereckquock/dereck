import React from 'react';
import Avatar from '../components/avatar';

function Heading() {
  return (
    <h1 css={{ display: 'flex', alignItems: 'center' }}>
      <Avatar />
      <span css={{ marginLeft: '1.35rem' }}>{`Hi 👋 I'm Dereck Quock`}</span>
    </h1>
  );
}

export default Heading;
