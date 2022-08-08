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
  const handleOpenEditMode = () => {
    setIsEdit(true);
  };
  const saveTodo = (item: any) => {
    console.log(item);
    if (item.id == item) {
      item.text = text;
      return item;
    } else {
      setText(text);
    }
    setIsEdit(false);
  };

  return isEdit ? (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  ) : (
    <div onClick={handleOpenEditMode}>{text}</div>
  );
};
