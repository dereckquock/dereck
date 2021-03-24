/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Overlay, ModalContent, Header, Logo, useModal } from './lib';

export function SimplerModal() {
  const { showDialog, openDialog, closeDialog } = useModal();

  return (
    <div css={{ marginBottom: '1rem' }}>
      <button onClick={openDialog}>Show Simpler Modal</button>
      <Overlay isOpen={showDialog}>
        <ModalContent aria-label="basic" type="3/4">
          <article css={{ padding: '1rem' }}>
            <Header>
              <h2 css={{ margin: 0 }}>
                <Logo /> Modal Title
              </h2>
            </Header>
            <p>
              Pariatur exercitation dolor mollit ad dolor irure pariatur qui qui
              excepteur cupidatat occaecat dolore. Irure reprehenderit aliquip
              laborum incididunt sunt aliquip nisi in cillum. Velit aliquip sint
              quis ut quis tempor voluptate fugiat nulla.
            </p>
            <button css={{ width: '100%' }} onClick={closeDialog}>
              OK
            </button>
          </article>
        </ModalContent>
      </Overlay>
    </div>
  );
}
