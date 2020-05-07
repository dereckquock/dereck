import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 576px)',
  '@media(min-width: 768px)',
  '@media(min-width: 992px)',
  '@media(min-width: 1200px)',
]);

function getHeight(type) {
  switch (type) {
    case 'half':
      return '50vh';
    case '3/4':
      return '75vh';
    case 'full':
    default:
      return '100vh';
  }
}

export const Overlay = styled(DialogOverlay)`
  display: flex;
  align-items: flex-end;
  background: hsla(0, 0, 0, 0.8);
  color: #666666;
`;

export const ModalContent = styled(DialogContent)`
  ${(props) =>
    mq({
      width: ['100vw', '70vw', '50vw'],
      height: getHeight(props.type),
      margin: '0 auto',
      padding: 0,
      boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)',
    })}
`;

export const Header = styled.header`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = () => (
  <span role="img" aria-label="doge" style={{ marginRight: '1rem' }}>
    🐶
  </span>
);

export const Close = styled.button`
  font-size: 30px;
  line-height: 1.5;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export function useModal() {
  const [showDialog, setShowDialog] = React.useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  return { showDialog, openDialog, closeDialog };
}
