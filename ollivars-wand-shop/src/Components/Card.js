import React from "react";
// import WandDetail from "./WandDetail";
// import wands from "../wands";

function Card({ wand }) {
  // const wandDetail = wands.map((wand) => <WandDetail wand={wand.slug} />);

  return (
    <div className="card">
      <p>Core: {wand.core}</p>
      <p>Wood: {wand.wood}</p>
      <p>Length: {wand.length} MILES DUDE</p>
      <img width="200px" src={wand.imageUrl} alt="" />
    </div>
  );
}

export default Card;
