import * as React from 'react';
import './Text.scss';

export type TextProps = {
  children?: string[] | string;
  as?: React.ElementType;
};

/**
 *
 * @param original
 * @returns
 */
function formatCodeSnippets(original: string | string[]): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const pieces: string[] = typeof original === 'string' ? original.split('`') : original.join('').split('`');

  pieces.forEach((piece, index) => {
    const isCode = !!(index % 2);

    if (isCode) result.push(<code key={index}>{piece}</code>);
    else result.push(piece);
  });

  return result;
}

const Text: React.FC<TextProps> = (props) => {
  const { children = '', as: Component = 'span' } = props;

  const output = React.useMemo(() => formatCodeSnippets(children), [children]);

  return <Component className="text">{output}</Component>;
};

export default Text;
