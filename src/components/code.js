import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/synthwave84';

const Code = ({ children, className, metastring = '' }) => {
  const language = className.replace(/language-/, '');
  const linesToHighlight = metastring.split(',');

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{
              ...style,
              margin: '1em 0',
              padding: '1rem 0',
              borderRadius: 8,
            }}
          >
            {tokens.map((line, i) => {
              const shouldHighlightLine = linesToHighlight.includes(`${i + 1}`);

              return (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  style={{
                    padding: '0 0.5rem',
                    marginRight: shouldHighlightLine ? '-0.5rem' : 0,
                    borderLeft: shouldHighlightLine ? '2px solid' : '0',
                    backgroundColor: shouldHighlightLine
                      ? 'rgba(255,255,255,0.2)'
                      : 'transparent',
                  }}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default Code;
