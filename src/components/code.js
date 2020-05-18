import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

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
          <div css={{ overflow: 'auto' }}>
            <pre
              className={className}
              css={{
                ...style,
                minWidth: '100%',
                margin: '0 0 1em',
                padding: '1rem 0',
                float: 'left',
                overflow: 'initial',
                fontSize: '0.8888rem',
                borderRadius: 8,
              }}
            >
              {tokens.map((line, i) => {
                const shouldHighlightLine = linesToHighlight.includes(
                  `${i + 1}`
                );

                return (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    css={{
                      padding: '0 0.5rem',
                      borderLeft: shouldHighlightLine ? '1px solid' : 0,
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
          </div>
        );
      }}
    </Highlight>
  );
};

export default Code;
