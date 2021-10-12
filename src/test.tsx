import { FC } from 'react';
import { FilterableProductTable } from './FilterableProductTable';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';
import './styles.css';

export const TestInput: FC = () => {
  return (
    <div id="container">
      <FilterableProductTable />
      <SearchBar />
      <ProductTable />
    </div>
  );
};
