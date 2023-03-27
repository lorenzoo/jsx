// import { display, flexbox } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
//import { products } from "../../ProductsMock";

import Swal from "sweetalert2";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../FirebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarCarrito, getQuantityById } = useContext(CartContext);

  const [productSelec, setProductSelect] = useState  ({})

useEffect(()=>{

const itemCollection = collection( db, "products")
const ref = doc(itemCollection, id)
getDoc(ref)
.then(res => {
  setProductSelect({
    ...res.data(),
    id: res.id
  })
})

},[id])



  const onAdd = (cantidad) => {
    let producto = {
      ...productSelec,
      cantidad: cantidad,
    };

    agregarCarrito(producto);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Añadido al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidad = getQuantityById(Number(id));

  return (
    <ItemDetail productSelec={productSelec} onAdd={onAdd} cantidad={cantidad} />
  );
};

export default ItemDetailContainer;
