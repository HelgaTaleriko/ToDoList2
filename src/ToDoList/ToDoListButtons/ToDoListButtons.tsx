import React, { useCallback, useState } from "react";
export type Iprops = {
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
  const handleClickClear = () => {
    setInput("");
  };
  return (
    <div className="inputBox">
      <input
        className="input"
        onChange={handleChange}
        value={input}
        type={"text"}
        placeholder="Введите данные"
      />
      <button className="x" onClick={handleClickClear}>
        &times;
      </button>

      <br />
      <button className="add" onClick={handleClickAdd}>
        {" "}
        Добавить
      </button>
      <button className="delete" onClick={handleClickDel}>
        Очистить список
      </button>
    </div>
  );
};
