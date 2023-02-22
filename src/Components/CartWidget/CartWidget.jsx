
import { BsFillCartCheckFill } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div class="GrupCart">
      <span class="NumberCart">0</span>
      <BsFillCartCheckFill color="white" size={30} />
    </div>
  );
};

export default CartWidget;
