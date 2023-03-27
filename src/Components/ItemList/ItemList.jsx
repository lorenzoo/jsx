//import { elementAcceptingRef } from "@mui/utils";
import React from "react";

import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow:"wrap",
        width: "100%",
        alignItems: "center",
        //justifyContent: "center",
        justifyContent:"space-evenly",
        padding: "0.3%",
      }}
    >
      {items.map((element) => {
        return (
          <div >
            <Item key={element.id} element={element} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
