import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar
  const agregarCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let arregloCarrito = cart.map((element) => {
        if (element.id === producto.id) {
          return {
            ...element,
            cantidad: element.cantidad + producto.cantidad,
          };
        } else {
          return element;
        }
      });

      setCart(arregloCarrito);
    } else {
      setCart([...cart, producto]);
    }
  };
  // Duplicados en carrito

  const isInCart = (id) => {
    return cart.some((element) => element.id === id);
  };

  //eliminar elementos carrtio

  const limpiarCart = () => {
    setCart([]);
  };

  //contador elementos total  del carrito

  const getTotalCantidad = () => {
    return cart.reduce((acc, element) => {
      return acc + element.cantidad;
    }, 0);
  };

  //total precio de los productos del carrito

  const getPrecioTotal =()=>{
    let precioTotal = cart.reduce((acc, element)=> {

      return acc + (element.cantidad * element.price)

    }, 0)

return precioTotal

  }



  let data = {
    cart,
    agregarCarrito,
    limpiarCart,
    getTotalCantidad,
    getPrecioTotal
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
