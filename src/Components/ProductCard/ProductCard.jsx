//cambios en className test
const ProductCard = ({ title, price }) => {
  return (
    <div>
      <h1 style={{ color: "navy" }}> {title} </h1>
      <h2 style={{ color: "orange" }}> {price} </h2>
    </div>
  );
};

export default ProductCard;
