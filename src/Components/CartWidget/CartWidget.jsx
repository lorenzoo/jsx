import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getTotalCantidad } = useContext(CartContext);
  // variable para cambiar el total  articulos del carrito
  const total = getTotalCantidad();

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div className="GrupCart">
        <span className="NumberCart">{total}</span>
        <BsFillCartCheckFill color="white" size={30} />
      </div>
    </Link>
  );
};

export default CartWidget;
