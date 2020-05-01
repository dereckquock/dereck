import React from 'react';
import styled from '@emotion/styled';
import VisuallyHidden from '@reach/visually-hidden';

const Label = styled.label`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.111rem;
  line-height: 1.778rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.25s cubic-bezier(0, -0.55, 0.25, 2) 0s;

  :hover {
    transform: scale(1.2) rotateZ(-30deg);
  }
`;

function DarkModeToggle({ theme, toggleTheme }) {
  return (
    <Label htmlFor="dark-mode-toggle">
      <VisuallyHidden>
        <input
          type="checkbox"
          id="dark-mode-toggle"
          value={theme === 'dark'}
          onChange={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </VisuallyHidden>
      <span>{theme === 'dark' ? '🔆' : '🌙'}</span>
    </Label>
  );
}

export default DarkModeToggle;
