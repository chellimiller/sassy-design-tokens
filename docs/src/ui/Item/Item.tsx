import * as React from 'react';
import { SassdocItem, SassdocItemContext } from '../../types/SassdocItem';
import ItemDescription from '../ItemDescription';
import ItemParameterList from '../ItemParameterList';
import Text from '../Text';
import './Item.scss';

export type ItemProps = {
  data: SassdocItem;
};

function generateItemTitle(context: SassdocItemContext) {
  switch (context.type) {
    case 'placeholder':
      return `%${context.name}`;
    case 'variable':
      return `$${context.name}`;
    default:
      return `@${context.type} ${context.name}`;
  }
}

const Item: React.FC<ItemProps> = (props) => {
  const { data } = props;
  // const output = React.useMemo(() => JSON.stringify(data, null, 2), [data]);
  const className = `item item-${data.context.type}`;
  const title = generateItemTitle(data.context);

  return (
    <section className={className}>
      <Text as="h3">{title}</Text>
      <ItemDescription data={data.description} />
      <ItemParameterList data={data.parameter} />
    </section>
  );
};

export default Item;
