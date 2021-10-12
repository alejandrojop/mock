import { FC } from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

export const ProductTable: FC = () => {
  return (
    <div>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
};
