import React, { useState } from "react";
import { ToDoListDisplay } from "./ToDoListDisplay";
import { ToDoListButtons } from "./ToDoListButtons";
import { type } from "@testing-library/user-event/dist/type";

export type ItemType = {
  text: string;
  id: number;
};
export const ToDoList = () => {
  const [items, setItems] = useState<ItemType[]>([{ text: "test", id: 0 }]);
  const addText = (text: string) => {
    setItems([...items, { text: text, id: new Date().valueOf() }]);
  };
  const minusText = () => {
    setItems([]);
  };
  console.log(items);
  const deleteItem = (id: number) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };
  return (
    <div>
      <ToDoListDisplay deleteItem={deleteItem} items={items} />
      <ToDoListButtons addText={addText} minusText={minusText} />
    </div>
  );
};
