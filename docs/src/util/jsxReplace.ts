/**
 *
 * @param original
 * @param replacement
 * @returns
 */
function jsxReplace(original: string, replacement: Record<string, React.ReactNode>): React.ReactNode[] {
  const keys = Object.keys(replacement);
  const keyMatcher = new RegExp(keys.map((key) => `{${key}}`).join('|'));
  return original.split(keyMatcher).map((item, index) => [item, replacement[keys[index]]]);
}
