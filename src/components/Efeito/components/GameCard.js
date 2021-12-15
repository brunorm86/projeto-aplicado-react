import React from "react";

export const GameCard = ({ game }) => {
  return (
    <div>
      <h3>{game.title}</h3>
      <span>{game.platform}</span>
    </div>
  );
};
