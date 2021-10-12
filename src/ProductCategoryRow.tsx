import { FC } from 'react';
import { stock } from './data';
import { Data } from './interfaces';

export const ProductCategoryRow: FC = () => {
  return (
    <div id="productList">
      <ul>
        {stock.map((product: Data, i: number) => (
          <li key={i}>{product.name}</li>
        ))}
      </ul>
      <ul>
        {stock.map((product: Data, i: number | string) => (
          <li key={i}>{product.price}</li>
        ))}
      </ul>
    </div>
  );
};
