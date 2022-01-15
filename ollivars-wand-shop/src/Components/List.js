import React from "react";
import Card from "./Card";

function List({ wands }) {
  const wandsList = wands.map((wand) => <Card wand={wand} />);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {wandsList}
    </div>
  );
}

export default List;
