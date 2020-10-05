import React from "react";
import CardItem from "./CardItem";

const CardList = ({ data, onCardSelect }) => {
  const cards = data.map(card => {
    return <CardItem key={card.id} onCardSelect={onCardSelect} card={card} />;
  });

  return <div className="ui celled grid container">{cards}</div>;
};

export default CardList;
