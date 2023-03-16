// import { display, flexbox } from "@mui/system";
import React, { useContext }  from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { products } from "../../ProductsMock";
import Contadores from "../Contadores/Contadores";
// import styles from "../ItemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarCarrito } = useContext( CartContext )

  const productSelec = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {

let producto = {

 ...productSelec, 
  cantidad: cantidad 


}

    agregarCarrito ( producto )
    
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{productSelec.title}</h1>
      <img src={productSelec.img} style={{ height: "40%", width: "40%" }} />
      <h3>{productSelec.description}</h3>
      <h3>{productSelec.price}€</h3>
      <Contadores stock={productSelec.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
