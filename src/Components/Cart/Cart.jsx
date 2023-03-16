import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, limpiarCart, getPrecioTotal } = useContext(CartContext);
  const precioTotal = getPrecioTotal();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {cart.map((element) => {
        return (
          <div
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0.5rem",
            }}
            key={element.id}
          >
            <h2>{element.title}</h2>
            <img
              src={element.img}
              alt=""
              style={{ width: "40%", height: "40%" }}
            />

            <h3>{element.description}</h3>

            <h3>{element.price}€</h3>
            <h3>Cantidad {element.cantidad}</h3>
          </div>
        );
      })}
      <h3 style={{ padding: "0.5rem" }}>
        {" "}
        Precio total de tu compra {precioTotal}€
      </h3>
      <button
        onClick={limpiarCart}
        class="favorite styled"
        type="button"
        style={{ color: "white", textShadow: "none", height: "20%" }}
      >
        Limpiar Carrito
      </button>
    </div>
  );
};

export default Cart;
