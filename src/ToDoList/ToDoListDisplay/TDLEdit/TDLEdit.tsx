import React, { useState } from "react";
import { ItemType } from "../../ToDoList";

export type Iprops = {
  item: ItemType;
  saveTodo: (text: string, id: number) => void;
};
export const TDLEdit = ({ item, saveTodo }: Iprops) => {
  const [text, setText] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = () => {
    saveTodo(text, item.id);
    setIsEdit(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleOpenEditMode = () => {
    setIsEdit(true);
  };

  return isEdit ? (
    <div className="input">
      <input onChange={handleChange} value={text} />
      <button onClick={handleClickEdit}>Сохранить</button>
    </div>
  ) : (
    <div onClick={handleOpenEditMode}>{item.text}</div>
  );
};
