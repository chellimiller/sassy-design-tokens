import * as React from 'react';
import { hot } from 'react-hot-loader/root';
// @ts-expect-error
import items from '../../src/index.scss';
import { SassdocItem, SassdocItemType } from './types/SassdocItem';
import Item from './ui/Item';

type SassdocItemSearchOptions = {
  keywords?: string;
  type?: SassdocItemType;
};

function getDisplayItems(search: SassdocItemSearchOptions): SassdocItem[] {
  const { keywords = '', type } = search;
  return items.filter((item: SassdocItem) => {
    if (!item.context.name.includes(keywords)) return false;
    if (type && item.context.type !== type) return false;
    return true;
  });
}

const App: React.FC = () => {
  const [search, setSearch] = React.useState<SassdocItemSearchOptions>({});
  const displayedItems = React.useMemo(() => getDisplayItems(search), [search]);

  const doSetKeywords = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch((prev) => ({ ...prev, keywords: event.target.value }));
    },
    [setSearch]
  );

  return (
    <div id="app">
      <header>
        <label htmlFor="search">Search</label>
        <input name="search" type="search" onChange={doSetKeywords} value={search.keywords || ''} />
      </header>
      <main>
        {displayedItems.map((item) => (
          <Item key={`${item.context.type}-${item.context.name}`} data={item} />
        ))}
      </main>
    </div>
  );
};

export default hot(App);
