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
    <div className="parameter">
      <h4>Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((parameter: SassdocItemParameter) => (
            <tr key={parameter.name}>
              <td>
                {/* <Text>{parameter.name}</Text> */}
                {parameter.name}
              </td>
              <th>
                {/* <Text>{parameter.description}</Text> */}
                {parameter.description}
              </th>
              <th>
                {/* <Text>{parameter.type}</Text> */}
                {parameter.type}
              </th>
              <th>
                {/* <Text>{parameter.default}</Text> */}
                {parameter.default}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemParameterList;
