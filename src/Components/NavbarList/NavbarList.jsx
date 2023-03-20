import styles from "./NavbarList.css";
import { Link } from "react-router-dom";


const NavbarList = () => {
  const camisetas = () => {};
  const sudaderas = () => {};
  const pantalones = () => {};
  const accesorios = () => {};

  return (
    <div className={styles.containerNavbarList}>
      <ul>
        <Link to="category/Camisetas">
          <li>
            <button
              className="favorite styled"
              type="button"
              onClick={camisetas}
              style={{ color: "white", textShadow: "none" }}
            >
              Camisetas
            </button>
          </li>
        </Link>
        <Link to="category/Sudaderas">
          <li>
            <button
              className="favorite styled"
              type="button"
              onClick={sudaderas}
              style={{ color: "white", textShadow: "none" }}
            >
              Sudaderas
            </button>
          </li>
        </Link>
        <Link to="category/Pantalones">
          <li>
            <button
              className="favorite styled"
              type="button"
              onClick={pantalones}
              style={{ color: "white", textShadow: "none" }}
            >
              Pantalones
            </button>
          </li>
        </Link>
        <Link to="category/Accesorios">
          <li>
            <button
              className="favorite styled"
              type="button"
              onClick={accesorios}
              style={{ color: "white", textShadow: "none" }}
            >
              Accesorios
            </button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarList;
