import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfig";
//import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";
import {collection, getDocs} from "firebase/firestore"

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [items, setItems] = useState([]);

 // const productosFiltrados = products.filter(
 //   (elemento) => elemento.category === categoryId
 // );

  useEffect(() => {
  //  const productList = new Promise((resolve, reject) => {
  //   resolve(categoryId ? productosFiltrados : products);
  // });
  //  productList
  //    .then((res) => {
  //      setItems(res);
  //    })
  //    .catch((error) => {
  //     console.log(error);
  //    });
// ARREGLAR ESTA PARTE QUE NO FUNCIONA 
 const itemsCollection = collection(db, "products");
 getDocs(itemsCollection).then((res) => {
    let products = res.docs.map((product) => {
      return {
       ...product.data(),
       id: product.id
     };
    });
   setItems(products);
})
   
    },
  [categoryId]);
    

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
