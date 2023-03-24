// import { display, flexbox } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
//import { products } from "../../ProductsMock";
import Contadores from "../Contadores/Contadores";
import Swal from "sweetalert2";
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../FirebaseConfig";



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
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{productSelec.title}</h1>
      <img src={productSelec.img} style={{ height: "40%", width: "40%" }} alt=""/>
      <h3>{productSelec.description}</h3>
      <h3>Precio {productSelec.price}€</h3>
      <Contadores stock={productSelec.stock} onAdd={onAdd} initial={cantidad} />
    </div>
  );
};

export default ItemDetailContainer;
