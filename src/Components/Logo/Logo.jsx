import imagenLogo from "../../images/logoGreat.jpg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img
          src={imagenLogo}
          alt="logoGreatTomorrow"
          style={{ width: "20vw", padding: "0.5rem", borderRadius: "10%" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
