import React, { useState } from "react";
import { ItemType } from "../../ToDoList";

export type Iprops = {
  item: ItemType;
};
export const TDLEdit = ({ item }: Iprops) => {
  const [text, setText] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return isEdit ? (
    <input onChange={handleChange} />
  ) : (
    <div onClick={() => setIsEdit(true)}>{text}</div>
  );
};
