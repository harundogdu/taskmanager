import React from "react";
import Card from "./Card";
import DATA from "public/data/todo.json";

type CardContainerProps = {
  title: string;
};

const CardContainer = ({ title }: CardContainerProps) => {
  console.log();

  return (
    <div className="card-container">
      <h1 className="text-xl font-bold">{title}</h1>
      {DATA.map((todo) => (
        <Card key={todo.id} card={todo} />
      ))}
    </div>
  );
};

export default CardContainer;
