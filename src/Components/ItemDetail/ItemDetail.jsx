import React from 'react'
import Contadores from '../Contadores/Contadores'

const ItemDetail = ({productSelec, onAdd, cantidad }) => {
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
  )
}

export default ItemDetail
