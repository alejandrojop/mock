import { FC } from 'react';
import { stock } from './data';
import { Data } from './interfaces';

const compare: string[] = [];

const lista = stock.filter(function (title) {
  compare.push(title.category);
  console.log(compare);

  return compare;
});

const uniq: string[] = compare.reduce(function (a, b) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);

// console.log(uniq);

const filtrado: string[] = compare.filter((f) => !uniq.includes(f));
console.log(filtrado);

export const ProductCategoryRow: FC = () => {
  return (
    <div id="productList">
      <table>
        <tr>
          <td>
            <ul>
              <li>{uniq}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              {stock.map((product: Data, i: number) => (
                <li key={i}>{product.name}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              <ul>
                {stock.map((product: Data, i: number | string) => (
                  <li key={i}>{product.price}</li>
                ))}
              </ul>
            </ul>
          </td>
        </tr>
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
