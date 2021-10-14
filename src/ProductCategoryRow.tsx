import { FC, useState, useEffect } from 'react';
import { stock } from './data';
import { Data, CategoryGroup } from './interfaces';

export const ProductCategoryRow: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Data[] | null>(null);

  const fetchProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setProducts(stock);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categoryProducts = () => {
    const categorysGroup: CategoryGroup[] = [];

    products?.forEach((product) => {
      const categoryIndex = categorysGroup.findIndex(
        (categoryProduct) => categoryProduct.label === product.category
      );

      if (categoryIndex >= 0) {
        categorysGroup[categoryIndex].items.push(product);
      } else {
        categorysGroup.push({ label: product.category, items: [product] });
      }
    });

    return categorysGroup;
  };

  console.log(
    //categoryProducts().map((topic) => topic.label),
    //categoryProducts().map((topic) => topic.items),
    categoryProducts(),
    isLoading
  );

  if (!products) {
    return <div>Is Loading...</div>;
  }

  return (
    <div id="productList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {categoryProducts().map((item) => (
            <>
              <tr key={item.label}>
                <td style={{ fontSize: '1.5rem' }}>{item.label}</td>
              </tr>

              {item.items.map((list) => (
                <tr key={list.name}>
                  <td key={Math.random()}>{list.name}</td>
                  <td key={Math.random()}>{list.price}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
