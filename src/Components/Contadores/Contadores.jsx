import { useEffect, useState } from "react";
import styles from "../Contadores/Contadores.css";

const Contadores = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ minWidth: "40%" }}>
      <h3 style={{ color: "red" }}>{contador} Cantidad Seleccionada</h3>
      <ul className="botonesMasMenos">
        <li>
          <h4 style={{ color: "white" }}>Añadir</h4>
          <button
            onClick={sumar}
            className="botonContador"
            class="favorite styled"
            type="button"
            style={{ color: "white", textShadow: "none" }}
          >
            +
          </button>
        </li>
        <li>
          <h4 style={{ color: "white" }}>Eliminar</h4>
          <button
            onClick={restar}
            className="botonContador"
            class="favorite styled"
            type="button"
            style={{ color: "white", textShadow: "none" }}
          >
            -
          </button>
        </li>
        <li>
          <button
            onClick={() => onAdd(contador)}
            className="botonContador"
            class="favorite styled"
            type="button"
            style={{ color: "white", textShadow: "none" }}
          >
            Añadir al Carrtio
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Contadores;
