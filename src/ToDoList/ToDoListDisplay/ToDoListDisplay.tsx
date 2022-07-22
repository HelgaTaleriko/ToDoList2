import React from "react";
import { ToDoListItem } from "./ToDoListItem";
import { ItemType } from "../ToDoList";

export type Iprops = {
  items: ItemType[];
};

export const ToDoListDisplay = ({ items }: Iprops) => {
  const text = "Список :";
  return (
    <div>
      <h1> {text}</h1>
      <ul>
        {items.map((item) => (
          <ToDoListItem text={item.text} />
        ))}
      </ul>
    </div>
  );
};
