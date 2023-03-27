import React from "react";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const FormCheckOut = ({ cart, getPrecioTotal, setOrderId, limpiarCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getPrecioTotal();

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

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
        justifyContent: "center",
      }}
    >
      <h1 style={{ paddingBottom: "0.5rem" }}>Check Out</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          style={{ fontSize: "larger", padding: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          style={{ fontSize: "larger", padding: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="phone"
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
