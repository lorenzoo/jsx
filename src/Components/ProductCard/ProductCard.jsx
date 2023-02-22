import "./ProductCard.css";

//cambios en className test
const ProductCard = ({ title, price = 0, isRed }) => {
  return (
    <div>
      <h1 className={isRed}> {title} </h1>
      <h2> {price} </h2>
    </div>
  );
};

export default ProductCard;
