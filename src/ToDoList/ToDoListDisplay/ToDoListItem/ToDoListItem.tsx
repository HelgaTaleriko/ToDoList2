import React from "react";
import { ItemType } from "../../ToDoList";
import { TDLForm } from "../../ToDoListButtons/TDLForm";
import { TDLEdit } from "../TDLEdit";
type Iprops = {
  item: ItemType;
  deleteItem: (id: number) => void;
  saveTodo: (text: string, id: number) => void;
};
export const ToDoListItem = ({ item, deleteItem, saveTodo }: Iprops) => {
  const handleDelete = () => {
    deleteItem(item.id);
  };

  return (
    <div>
      <li>
        <TDLEdit saveTodo={saveTodo} item={item} />
        <button onClick={handleDelete}>&times;</button>
        <TDLForm />
      </li>
    </div>
  );
};
