import { FC, useState } from 'react';
import { UserInput } from './interfaces';

const TextInput: FC<UserInput> = ({ onChangeHandler, value }) => {
  return (
    <input value={value} onChange={(e) => onChangeHandler(e.target.value)} />
  );
};

//test for dynamic search
// const handleSearch = (data, searchInput) => {
//   const filteredData = data.filter((value) => {
//     const searchStr = searchInput.ToLowerCase();
//     const oneItenMatches = value.items.some((item) =>
//       item.ToLowerCase().includes(searchStr)
//     );
//     return oneItenMatches;
//   });
//   console.log(filteredData);
// };

export const FilterableProductTable: FC = () => {
  const [search, setSearch] = useState('');

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div id="filter">
      <input type="text" placeholder="Search..." />
      {/* <TextInput value={search} onChangeHandler={handleChange} /> */}
      <input id="busqueda" type="checkbox" />
      <label htmlFor="busqueda">Only show products in stock</label>
    </div>
  );
};
