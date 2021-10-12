import { FC } from 'react';

export const FilterableProductTable: FC = () => {
  return (
    <div id="filter">
      <input type="text" placeholder="Search..." />
      <input id="busqueda" type="checkbox" />
      <label htmlFor="busqueda">Only show products in stock</label>
    </div>
  );
};
