import * as React from 'react';
import './Text.scss';

export type TextProps = {
  children?: string[] | string;
  as?: React.ElementType;
  className?: string;
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
  const { children = '', as: Component = 'span', className: additionalClassName = '' } = props;

  const output = React.useMemo(() => formatCodeSnippets(children), [children]);
  const className = ['text', additionalClassName].join(' ').trim();

  return <Component className={className}>{output}</Component>;
};

export default Text;
