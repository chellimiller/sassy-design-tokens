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
      <h4>Description</h4>
      {paragraphs.map((text) => (
        <Text key={text} paragraph>
          {text}
        </Text>
      ))}
    </div>
  );
};

export default ItemDescription;
