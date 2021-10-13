import { FC } from 'react';
import { stock } from './data';
import { Data } from './interfaces';

const compare: string[] = [];

const lista = stock.filter(function (title) {
  return compare.push(title.category);
});
console.log(lista);

const uniq: string[] = compare.reduce(function (a, b: string[]) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);

console.log(uniq);

const agrupar = () => {};

const filtrado: string[] = compare.filter((f) => !uniq.includes(f));
console.log(filtrado);

export const ProductCategoryRow: FC = () => {
  return (
    <div id="productList">
      <table>
        <thead>
          <th>
            <tr>
              <td>{uniq[0]}</td>
            </tr>
          </th>
          <th>
            <tr>
              <td>{uniq[1]}</td>
            </tr>
          </th>
        </thead>
        <tbody>
          <td>
            <tr>
              {stock.map((product: Data) => (
                <tr key={product.name}>{product.name}</tr>
              ))}
            </tr>
            <td>
              <td>
                {stock.map((product: Data) => (
                  <tr key={product.name}>{product.price}</tr>
                ))}
              </td>
            </td>
          </td>
        </tbody>
      </table>
    </div>
  );
};

/* <ul>
{stock.map((product: Data, i: number) => (
  <li key={i}>{product.name}</li>
))}
</ul>
<ul>
{stock.map((product: Data, i: number | string) => (
  <li key={i}>{product.price}</li>
))}
</ul> */

// <tr>
// {stock.map((product: Data) => (
//   <td key={product.name}>{product.name}</td>
// ))}

// <tr>
//   {stock.map((product: Data) => (
//     <td key={product.name}>{product.price}</td>
//   ))}
// </tr>
// </tr>
