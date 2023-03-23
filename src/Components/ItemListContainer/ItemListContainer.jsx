import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FirebaseConfig";
//import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [items, setItems] = useState([]);

 
  useEffect(() => {
    const itemsCollection = collection(db, "products");
    // ARREGLAR ESTA PARTE QUE NO FUNCIONA
    let consulta = undefined ;


    if (categoryId) {
      const q = query(itemsCollection, where("category", "==", categoryId));
      consulta = getDocs(q)

    } 
    else {
     consulta = getDocs(itemsCollection)

    }
consulta.then((res)=> {
let products = res.docs.map((product)=> {
  return {
    ...product.data(),
    id: product.id
  }
})
setItems(products);
})
  }, [categoryId]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
