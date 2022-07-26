import React from "react";
import { ToDoListItem } from "./ToDoListItem";
import { ItemType } from "../ToDoList";

export type Iprops = {
  items: ItemType[];
  deleteItem: (id: number) => void;
};

export const ToDoListDisplay = ({ items, deleteItem }: Iprops) => {
  const text = "Список :";
  return (
    <div>
      <h1> {text}</h1>
      <ul>
        {items.map((item) => (
          <ToDoListItem deleteItem={deleteItem} item={item} />
        ))}
      </ul>
    </div>
  );
};
