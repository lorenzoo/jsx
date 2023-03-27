import React from "react";
import styles from "./Item.Style.css";
//import Contadores from "../Contadores/Contadores";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div className="container">
      <img className="ImageProduct" src={element.img} alt="" />
      <h2 className={styles.title}>{element.title} </h2>
      <h3> {element.description}</h3>
      <h3> {element.price}€</h3>

      <Link to={`/item/${element.id}`}>
        <button className="favorite styled" type="button">
          <h4
            className="DetalleProducto"
            style={{ color: "white", textShadow: "none" }}
          >
            Detalle del Producto
          </h4>
        </button>
      </Link>
    </div>
  );
};
export default Item;
