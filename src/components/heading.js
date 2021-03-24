/** @jsx jsx */
import { jsx } from '@emotion/react';
import { keyframes } from '@emotion/react';
import Avatar from '../components/avatar';

const wave = keyframes`
  0% { transform: rotateZ(0) }
  25% { transform: rotateZ(-10deg) }
  50% { transform: rotateZ(10deg) }
  75% { transform: rotateZ(-10deg) }
  100% { transform: rotateZ(0) }
`;

function Heading() {
  return (
    <h1 css={{ display: 'flex', alignItems: 'center' }}>
      <Avatar />
      <span css={{ marginLeft: '1.35rem' }}>
        Hi{' '}
        <span
          css={{
            display: 'inline-block',
            transformOrigin: 'right bottom',
            animation: `${wave} 1s 0.5s 1 normal ease-out`,
          }}
        >
          👋
        </span>{' '}
        I&#39;m Dereck Quock
      </span>
    </h1>
  );
}

export default Heading;
