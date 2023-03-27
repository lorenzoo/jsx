import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { useState } from "react";
import FormCheckOut from "../FormCheckOut/FormCheckOut";



const Cart = () => {
  const { cart, limpiarCart, getPrecioTotal, deleteProductById } =
    useContext(CartContext);

    const [showForm, setShowForm] = useState(false);
    const [orderId, setOrderId] = useState ( null) 

  const precioTotal = getPrecioTotal();

  const clear = () => {
    Swal.fire({
      title: "Vaciar el carrtio?",
      text: "Esta seguro?!",
      icon: "warning",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "#11CBCF",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, vaciarlo!",
      showDenyButtonText: `No vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Vaciado!", "Tu carrito ha sido vaciado", "success");
        limpiarCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito queda guardado", "", "success");
      }
    });
  };


if(orderId) {

  return (
  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"60vh", justifyContent:"space-evenly"}}>
    <h2>Gracias por su Compra</h2>
    <h4>Su numero de pedido es: {orderId}</h4>
    <button
    className="favorite styled"
    type="button"
    style={{ color: "white", textShadow: "none" }}
    >
      Seguir Comprando</button>
    </div>
  )
}
  return (
   <div >
    {
      !showForm ? (
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
              className="favorite styled"
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

          alignItems: "flex-end",
          paddingRight: "0.5rem",
          minHeight: "50vh",
          justifyContent: "flex-end",
        }}
      >
        {cart.length < 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingLeft: "10rem",
            }}
          >
            <h2 style={{ paddingLeft: "0.5rem" }}>Tu carrito esta vacio</h2>
            <img
              src="https://res.cloudinary.com/dl1sh8s84/image/upload/v1679837014/empty_cart_ejrtiq.png"
              alt=""
            ></img>
          </div>
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
              onClick={()=> setShowForm(true)}
              className="favorite styled"
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
              onClick={() => clear()}
              className="favorite styled"
              type="button"
              style={{ color: "white", textShadow: "none", height: "20%" }}
            >
              Vaciar Carrito
            </button>
          </div> 
        )}
        
      </div>
      
     </div> 
     ) : ( 
     <FormCheckOut cart={cart} getPrecioTotal={getPrecioTotal} setOrderId={setOrderId} />
  
    )}
    
    
     </div>
    
  );
};

export default Cart;
