import imagenLogo from "../../images/logoGreat.jpg";

const Logo = () => {
  return (
    <div>
      <img
        src={imagenLogo}
        alt="logo"
        style={{ width: "20vw", padding: "0.5rem", borderRadius: "10%" }}
      />
    </div>
  );
};

export default Logo;
