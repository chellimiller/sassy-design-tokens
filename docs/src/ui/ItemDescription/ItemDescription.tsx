import * as React from 'react';
import './ItemDescription.scss';
import Text from '../Text';

export type ItemDescriptionProps = {
  data: string;
};

const ItemDescription: React.FC<ItemDescriptionProps> = (props) => {
  const { data } = props;
  const paragraphs = React.useMemo(() => data.split('\n'), [data]);

  return (
    <div className="description">
      <Text as="h4">Description</Text>
      {paragraphs.map((text) => (
        <Text key={text} as="p">
          {text}
        </Text>
      ))}
    </div>
  );
};

export default ItemDescription;
