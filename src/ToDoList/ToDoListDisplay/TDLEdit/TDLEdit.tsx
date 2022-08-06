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
  // const saveTodo = (id: number) => {
  //   newTodo = [...item].map(item=>(
  //       if(item.id==id){item.text=value}
  //   ))
  // };
  return isEdit ? (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={() => saveTodo(item.id)}>Сохранить</button>
    </div>
  ) : (
    <div onClick={() => setIsEdit(true)}>{text}</div>
  );
};
