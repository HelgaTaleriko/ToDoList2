import React, { useCallback, useState } from "react";
import { ItemType } from "../../ToDoList";

export type Iprops = {
  item: ItemType;
};
export const TDLEdit = ({ item }: Iprops) => {
  const [text, setText] = useState(item.text);
  const [isEdit, setIsEdit] = useState(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const editTodo = (item: any) => {
    setIsEdit(item);
  };
  const saveTodo = (item: any) => {
    if (item.id == item) {
      item.text = text;
      return item;
    } else {
      setText(text);
    }
    setIsEdit(null);
  };

  return isEdit ? (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  ) : (
    <div onClick={editTodo}>{text}</div>
  );
};
