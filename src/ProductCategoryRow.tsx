import { FC, useState, useEffect } from 'react';
import { stock } from './data';
import { Data, CategoryGroup } from './interfaces';

//tenho que ir jantar, 15mins ok ~~~~~~~ ^^^^^^^^teclado de Merda todo esta trocado^esta trocado na empresa, esta trocado ai, nãoh asheahi quaehaha hahqauhahaereres mahiahsaha tenho o teclado da laptop agora... esta no portuges fisicamente... mas no metodo de entrada esta no ingleshehee

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
  // para fazer pedidos à api é sempre dentro de um useEffect
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

  console.log(categoryProducts(), isLoading);

  if (!products) {
    return null;
  } else if (products) {
    <div>Is Loading...</div>;
  }

  // para fazeres o loop nos productos tens que executar a função como esta dentro do console.log
  // categoryProducts().map()
  // isso não está bom mas amanha arranjamos.. FUIIIIIII percebeste?
  //ok obrigado GAGAGAGGA hahaha sim boa, fui pronto... boa noite.

  return (
    <h1>hello world</h1>
    // <div id="productList">
    //   <table>
    //     <thead>
    //       <th>
    //         <tr>{/* <td>{uniq[0]}</td> */}</tr>
    //       </th>
    //       <th>
    //         <tr>{/* <td>{uniq[1]}</td> */}</tr>
    //       </th>
    //     </thead>
    //     <tbody>
    //       <td>
    //         <tr>
    //           {stock.map((product: Data) => (
    //             <tr key={product.name}>{product.name}</tr>
    //           ))}
    //         </tr>
    //         <td>
    //           <td>
    //             {stock.map((product: Data) => (
    //               <tr key={product.name}>{product.price}</tr>
    //             ))}
    //           </td>
    //         </td>
    //       </td>
    //     </tbody>
    //   </table>
    // </div>
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
