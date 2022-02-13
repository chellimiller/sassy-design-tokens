import * as React from 'react';
import { SassdocItemParameter } from '../../types/SassdocItem';
import Text from '../Text';
import './ItemParameterList.scss';

export type ItemParameterListProps = {
  data?: SassdocItemParameter[];
};

const ItemParameterList: React.FC<ItemParameterListProps> = (props) => {
  const { data = [] } = props;
  if (!data.length) {
    return (
      <div className="parameters">
        <Text as="h4">Parameters</Text>
        <Text as="p">This item does not take any parameters</Text>
      </div>
    );
  }

  return (
    <div className="parameters">
      <Text as="h4">Parameters</Text>
      <table>
        <thead>
          <tr>
            <Text as="th" className="name">
              Name
            </Text>
            <Text as="th" className="description">
              Description
            </Text>
            <Text as="th" className="type">
              Type
            </Text>
            <Text as="th" className="default">
              Default Value
            </Text>
          </tr>
        </thead>
        <tbody>
          {data.map((parameter: SassdocItemParameter) => (
            <tr key={parameter.name}>
              <td className="name">
                <Text>`${parameter.name}`</Text>
              </td>
              <td className="description">
                <Text>{parameter.description}</Text>
              </td>
              <td className="type">
                <Text>`{parameter.type}`</Text>
              </td>
              <td className="default">{parameter.default && <Text>`{parameter.default}`</Text>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemParameterList;
