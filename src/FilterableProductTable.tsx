import { FC, useState } from 'react';

export const FilterableProductTable: FC = () => {
  const [search, setSearch] = useState('');
  return (
    <div id="filter">
      <input type="text" placeholder="Search..." />
      <input id="busqueda" type="checkbox" />
      <label htmlFor="busqueda">Only show products in stock</label>
    </div>
  );
};
