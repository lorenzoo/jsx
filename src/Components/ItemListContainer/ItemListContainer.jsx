import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {

const {categoryId} = useParams ()
console.log(categoryId )

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter ((elemento)=>elemento.category === categoryId )

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryId ? productosFiltrados : products);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
