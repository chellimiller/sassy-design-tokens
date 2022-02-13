import * as React from 'react';
import './Text.scss';

export type TextProps = {
  children?: string;
  paragraph?: boolean;
};

/**
 *
 * @param original
 * @returns
 */
function formatCodeSnippets(original: string): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const pieces: string[] = original.split('`');

  pieces.forEach((piece, index) => {
    const isCode = !!(index % 2);

    if (isCode) result.push(<code key={index}>{piece}</code>);
    else result.push(piece);
  });

  return result;
}

const Text: React.FC<TextProps> = (props) => {
  const { children = '', paragraph } = props;

  const output = React.useMemo(() => formatCodeSnippets(children), [children]);

  if (paragraph) return <p className="text">{output}</p>;
  return <span className="text">{output}</span>;
};

export default Text;
