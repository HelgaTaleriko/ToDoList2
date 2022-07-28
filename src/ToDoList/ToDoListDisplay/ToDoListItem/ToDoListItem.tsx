import React from "react";
import { ItemType } from "../../ToDoList";
import { TDLForm } from "../../ToDoListButtons/TDLForm";

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
        {item.text}
        <TDLForm />
        <button onClick={handleDelete}>&times;</button>
      </li>
    </div>
  );
};
