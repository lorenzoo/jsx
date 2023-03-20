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
            cantidad: producto.cantidad,
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

  const getPrecioTotal = () => {
    let precioTotal = cart.reduce((acc, element) => {
      return acc + element.cantidad * element.price;
    }, 0);

    return precioTotal;
  };

  //eliminar producto del carrito por ID

  const deleteProductById = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  const getQuantityById = (id)=>{
    const productoSeleccionado = cart.find((element)=> element.id === id)
    return productoSeleccionado?.cantidad
  }

  let data = {
    cart,
    agregarCarrito,
    limpiarCart,
    getTotalCantidad,
    getPrecioTotal,
    deleteProductById,
    getQuantityById
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
