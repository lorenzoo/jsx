import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'


const Cart = () => {
  
  const { cart, limpiarCart, getPrecioTotal, deleteProductById } =
    useContext(CartContext);

  const precioTotal = getPrecioTotal();
 
  const clear = ()=>{

    Swal.fire({
      title: 'Vaciar el carrtio?',
      text: "Esta seguro?!",
      icon: 'warning',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: '#11CBCF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, vaciarlo!',
      showDenyButtonText: `No vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Vaciado!',
          'Tu carrito ha sido vaciado',
          'success'
        )
        limpiarCart()
      }else if (result.isDenied)
       {Swal.fire('El carrito queda guardado','','success') 



}  
 })

    
  }

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
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
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

            <h4>Precio {element.price}€</h4>
            <h4>Cantidad {element.cantidad}</h4>

            <button
              class="favorite styled"
              type="button"
              style={{ color: "white", textShadow: "none" }}
              onClick={() => deleteProductById(element.id)}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "12%",
          //backgroundColor: "green",
          //justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: "0.5rem",
          minHeight: "50vh",
          justifyContent: "flex-end",
        }}
      >
        {cart.length < 1 && (
          <h2 style={{ paddingLeft: "0.5rem" }}>Tu carrito esta vacio</h2>
        )}

        <h3 style={{ padding: "0.5rem" }}> Precio total: {precioTotal}€</h3>
        {cart.length > 0 && (
          <div
            style={{
              padding: "0.1rem",
              display: "flex",
              flexDirection: "column",

              alignItems: "flex-end",
            }}
          >
            <button
              onClick
              class="favorite styled"
              type="button"
              style={{
                color: "white",
                textShadow: "none",
                height: "20%",
                marginBottom: "0.2rem",
              }}
            >
              Comprar
            </button>
            <button
              onClick={()=>clear()}
              class="favorite styled"
              type="button"
              style={{ color: "white", textShadow: "none", height: "20%" }}
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
