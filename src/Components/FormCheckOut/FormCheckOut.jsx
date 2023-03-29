import React from "react";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import Swal from "sweetalert2";

const FormCheckOut = ({ cart, getPrecioTotal, setOrderId, limpiarCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    emailMatch: "",
    phone: "",
  });

  //prueba de numeros en el nombre

  const handlerChange = (e) => {
    if ("1234567890".includes(e.key.toLowerCase())) {
      return Swal.fire({
        title: "Nombre no valido",
        text: "El nombre no puede contener números y tiene que tener mas de tres caracteres",
      });
    }
  };

  // prueba telefono con letras

  const handlerPhone = (e) => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
      return Swal.fire({
        title: "El teléfono no es valido",
        text: "El teléfono no puede contener letras y tiene que tener mas de 8 digitos",
      });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 3)
      return Swal.fire({
        title: "Nombre no valido",
        text: "El nombre no puede contener números y tiene que tener mas de tres caracteres",
      });

    const emailIncluye =
      userData.email.includes("@") && userData.email.includes(".");
    if (!emailIncluye) {
      return Swal.fire("Email no valido");
    }

    if (userData.emailMatch != userData.email) {
      return Swal.fire("Email no coincide");
    }

    if (userData.phone.length < 8) {
      return Swal.fire({
        title: "El teléfono no es valido",
        text: "El teléfono no puede contener letras y tiene que tener mas de 8 digitos",
      });
    }

    let total = getPrecioTotal();

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    Swal.fire({
      title: "Gracias por su compra",
      text: "HAVE A GREAT TOMORROW",
      icon: "success",
      confirmButtonText: "CONTINUAR",
      confirmButtonColor: "grey",
    });

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        limpiarCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.cantidad });
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <h1 style={{ paddingBottom: "0.5rem" }}>Check Out</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h5 style={{ padding: "0.1rem" }}>Nombre</h5>
        <input
          //prueba de numeros

          onKeyDown={handlerChange}
          type="text"
          placeholder="Juan Doe"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          style={{ fontSize: "larger", padding: "0.5rem" }}
        />
        <h5 style={{ padding: "0.1rem" }}>Escribe tu email</h5>
        <input
          type="text"
          placeholder="Juan@email.com"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          style={{ fontSize: "larger", padding: "0.5rem" }}
        />

        <h5 style={{ padding: "0.1rem" }}>Confirma tu email</h5>
        <input
          type="text"
          placeholder="Juan@email.com"
          value={userData.emailMatch}
          onChange={(e) =>
            setUserData({ ...userData, emailMatch: e.target.value })
          }
          style={{ fontSize: "larger", padding: "0.5rem", fontStyle: "italic" }}
        />

        <h5 style={{ padding: "0.1rem" }}>Telefono</h5>
        <input

        //prueba de letras en el telefono


        onKeyDown={handlerPhone}
          type="text"
          placeholder="44900323"
          value={userData.telefono}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          style={{ fontSize: "larger", padding: "0.5rem" }}
        />

        <button
          className="favorite styled"
          type="submit"
          style={{ color: "white", textShadow: "none", margin: "0.3rem" }}
        >
          Finalizar la Compra
        </button>
      </form>
    </div>
  );
};

export default FormCheckOut;
