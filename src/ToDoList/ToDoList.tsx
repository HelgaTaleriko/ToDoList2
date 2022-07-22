import React, { useState } from "react";
import { ToDoListDisplay } from "./ToDoListDisplay";
import { ToDoListButtons } from "./ToDoListButtons";
import { type } from "@testing-library/user-event/dist/type";

export type ItemType = {
  text: string;
};
export const ToDoList = () => {
  const [items, setItems] = useState<ItemType[]>([{ text: "test" }]);
  const addText = (text: string) => {
    setItems([...items, { text: text }]);
  };
  const minusText = () => {
    setItems([]);
  };
  return (
    <div>
      <ToDoListDisplay items={items} />
      <ToDoListButtons addText={addText} minusText={minusText} />
    </div>
  );
};
