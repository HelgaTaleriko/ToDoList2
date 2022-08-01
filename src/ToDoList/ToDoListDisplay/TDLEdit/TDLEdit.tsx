import React, { useState } from "react";
import { ItemType } from "../../ToDoList";
type Iprops = {
  item: ItemType;
  text: string;
};
export const TDLEdit = ({ item }: Iprops) => {
  const [text, setText] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return isEdit ? (
    <input value={text} onChange={handleChange} />
  ) : (
    <div onClick={() => setIsEdit(true)}>{text}</div>
  );
};
