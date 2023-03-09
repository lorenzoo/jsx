import { BsFillCartCheckFill } from "react-icons/bs";
import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = ({ number }) => {
  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div className="GrupCart">
        <span className="NumberCart">0</span>
        <BsFillCartCheckFill color="white" size={30} />
      </div>
    </Link>
  );
};

export default CartWidget;
