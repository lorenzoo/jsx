//cambios en className test
const ProductCard = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.price} </h2>
    </div>
  );
};

export default ProductCard;
