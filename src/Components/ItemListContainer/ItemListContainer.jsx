import { useState, useEffect } from "react";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
