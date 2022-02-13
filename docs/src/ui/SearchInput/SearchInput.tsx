import * as React from 'react';
import './SearchInput.scss';

export type SearchInputProps = {
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  value?: string;
  label?: string;
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { name = 'search', onChange, value = '', label = 'Search' } = props;

  const doTriggerOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event, event.target.value);
    },
    [onChange]
  );

  return (
    <div className="search-input">
      <label htmlFor={name}>{label}</label>
      <input name={name} type="search" onChange={doTriggerOnChange} value={value} />
    </div>
  );
};

export default SearchInput;
