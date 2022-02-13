import * as React from 'react';
import { SassdocItemParameter } from '../../types/SassdocItem';
import Text from '../Text';
import './ItemParameterList.scss';

export type ItemParameterListProps = {
  data?: SassdocItemParameter[];
};

const ItemParameterList: React.FC<ItemParameterListProps> = (props) => {
  const { data = [] } = props;
  return (
    <div className="parameters">
      <Text as="h4">Parameters</Text>
      <table>
        <thead>
          <tr>
            <Text as="th">Name</Text>
            <Text as="th">Description</Text>
            <Text as="th">Type</Text>
            <Text as="th">Default Value</Text>
          </tr>
        </thead>
        <tbody>
          {data.map((parameter: SassdocItemParameter) => (
            <tr key={parameter.name}>
              <Text as="td">`${parameter.name}`</Text>
              <Text as="td">{parameter.description}</Text>
              <Text as="td">`{parameter.type}`</Text>
              <Text as="td">`{parameter.default}`</Text>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemParameterList;
