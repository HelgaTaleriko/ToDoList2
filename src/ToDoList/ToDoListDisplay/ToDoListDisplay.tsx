import React, { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";
import { ItemType } from "../ToDoList";
export type Iprops = {
  items: ItemType[];
  deleteItem: (id: number) => void;
  saveTodo: (text: string, id: number) => void;
};
export const ToDoListDisplay = ({ items, deleteItem, saveTodo }: Iprops) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ToDoListItem
            key={item.id}
            deleteItem={deleteItem}
            item={item}
            saveTodo={saveTodo}
          />
        ))}
      </ul>
    </div>
  );
};
