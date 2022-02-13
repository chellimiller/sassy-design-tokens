import * as React from 'react';
import { SassdocItem } from '../../types/SassdocItem';
import ItemDescription from '../ItemDescription';
import ItemParameterList from '../ItemParameterList';
import './Item.scss';

export type ItemProps = {
  data: SassdocItem;
};

const Item: React.FC<ItemProps> = (props) => {
  const { data } = props;
  const output = React.useMemo(() => JSON.stringify(data, null, 2), [data]);
  const className = `item-${data.context.type}`;
  return (
    <section className={className}>
      <h3>{data.context.name}</h3>
      <ItemDescription data={data.description} />
      <ItemParameterList data={data.parameter} />
    </section>
  );
};

export default Item;
