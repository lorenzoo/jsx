import styles from "./NavbarList.css";
const NavbarList = () => {
  return (
    <div className={styles.containerNavbarList}>
      <ul>
        <a href="#">
          <li>Camisetas</li>
        </a>
        <a href="#">
          <li>Sudaderas</li>
        </a>
        <a href="#">
          <li>Chaquetas</li>
        </a>
        <a href="#">
          <li>Pantalones</li>
        </a>
        <a href="#">
          <li>Complementos</li>
        </a>
      </ul>
    </div>
  );
};

export default NavbarList;
