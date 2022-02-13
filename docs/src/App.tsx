import * as React from 'react';
import { hot } from 'react-hot-loader/root';
// @ts-expect-error
import items from '../../src/index.scss';
import { SassdocItem } from './types/SassdocItem';
import Item from './ui/Item';

const App: React.FC = () => {
  return (
    <div id="app">
      {items.map((item: SassdocItem) => (
        <Item key={`${item.context.type}-${item.context.name}`} data={item} />
      ))}
    </div>
  );
};

export default hot(App);
