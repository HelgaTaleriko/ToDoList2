import React from "react";
import { ItemType } from "../../ToDoList";
type Iprops = {
  item: ItemType;
  deleteItem: (id: number) => void;
};
export const ToDoListItem = ({ item, deleteItem }: Iprops) => {
  const handleDelete = () => {
    deleteItem(item.id);
  };

  return (
    <div>
      <li>
        {item.text} <button onClick={handleDelete}>&times;</button>
      </li>
    </div>
  );
};
