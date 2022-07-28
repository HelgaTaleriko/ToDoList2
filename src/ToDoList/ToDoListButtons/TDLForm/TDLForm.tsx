import React, { useState } from "react";

export const TDLForm = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    alert("Выберите дествие: " + selectedValue);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={selectedValue} onChange={handleChange}>
          <option value="В работе">В работе</option>
          <option value="Завершено">Завершено</option>
        </select>
      </label>
      <input type="submit" value="Выбрать" />
    </form>
  );
};
