import React, { useCallback, useState } from "react";
type Iprops = {
  addText: (text: string) => void;
  minusText: () => void;
};
export const ToDoListButtons = ({ addText, minusText }: Iprops) => {
  const [input, setInput] = useState("");
  const handleClickAdd = useCallback(() => addText(input), [input, addText]);
  const handleClickDel = useCallback(() => minusText(), [minusText]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} value={input} type={"text"} />
      <br />
      <button onClick={handleClickAdd}> Добавить </button>
      <button onClick={handleClickDel}> Очистить форму </button>
    </div>
  );
};
