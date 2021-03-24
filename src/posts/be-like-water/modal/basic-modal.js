/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Dialog } from '@reach/dialog';

export function BasicModal() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div css={{ marginBottom: '1rem' }}>
      <button onClick={open}>Show Dialog</button>
      <Dialog
        aria-label="basic"
        css={{ color: '#666666' }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <p>This is a basic modal</p>
        <button onClick={close}>OK</button>
      </Dialog>
    </div>
  );
}
