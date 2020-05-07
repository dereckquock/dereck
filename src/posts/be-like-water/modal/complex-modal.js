import React from 'react';
import { Overlay, ModalContent, Header, Logo, Close } from './lib';

function CustomModal({
  showDialog,
  setShowDialog,
  title,
  hideHeader = false,
  hideLogo = false,
  hideCloseButton = false,
  preventCloseOnESC = false,
  type = 'full',
  children,
}) {
  const close = () => {
    if (!preventCloseOnESC) {
      setShowDialog(false);
    }
  };

  return (
    <Overlay isOpen={showDialog} onDismiss={close}>
      <ModalContent aria-label="complex" type={type}>
        <article css={{ padding: '1rem' }}>
          {!hideHeader && (
            <Header>
              <h2 css={{ margin: 0 }}>
                {!hideLogo && <Logo />}
                {title}
              </h2>
              {!hideCloseButton && <Close onClick={close}>×</Close>}
            </Header>
          )}
          {children}
        </article>
      </ModalContent>
    </Overlay>
  );
}

export function ComplexModal() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div css={{ marginBottom: '1rem' }}>
      <button onClick={open}>Show Complex Modal</button>
      <CustomModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title="Modal Title"
        type="3/4"
        hideCloseButton
        preventCloseOnESC
      >
        <p>
          Pariatur exercitation dolor mollit ad dolor irure pariatur qui qui
          excepteur cupidatat occaecat dolore. Irure reprehenderit aliquip
          laborum incididunt sunt aliquip nisi in cillum. Velit aliquip sint
          quis ut quis tempor voluptate fugiat nulla.
        </p>
        <button css={{ width: '100%' }} onClick={close}>
          OK
        </button>
      </CustomModal>
    </div>
  );
}
