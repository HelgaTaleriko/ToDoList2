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
  const handleClickClear = () => {
    setInput("");
  };
  return (
    <div>
      <input
        onChange={handleChange}
        value={input}
        type={"text"}
        placeholder="Введите данные"
      />

      <button onClick={handleClickClear}>&times;</button>

      <br />
      <button onClick={handleClickAdd}> Добавить</button>
      <button>Редакировать</button>
      <button onClick={handleClickDel}>Очистить список</button>
    </div>
  );
};
