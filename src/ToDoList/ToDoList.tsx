import React, { useState } from "react";
import { ToDoListDisplay } from "./ToDoListDisplay";
import { ToDoListButtons } from "./ToDoListButtons";
import "./ToDoList.css";

export type ItemType = {
  text: string;
  id: number;
  status: "toDo" | "inProgress" | "completed";
};
const initialValues: ItemType[] = [
  { text: "test", id: 0, status: "toDo" },
  { text: "test2", id: 1, status: "inProgress" },
  { text: "test3", id: 3, status: "completed" },
];
export const ToDoList = () => {
  const [items, setItems] = useState<ItemType[]>(initialValues);
  const addText = (text: string) => {
    let newItem: ItemType;
    newItem = {
      text: text,
      id: new Date().valueOf(),
      status: "toDo",
    };
    const newArray = [...items, newItem];
    setItems(newArray);
  };
  const minusText = () => {
    setItems([]);
  };

  const deleteItem = (id: number) => {
    const filteredItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filteredItems);
  };
  //решение Миши №1:
  const saveTodo = (text: string, id: number) => {
    //сделать savetodo с сохраненем стаатуса
    //создаем элемент массива
    // найти старый и объеденить с новым текстом(прочитать про объекты и спрэд операции)
    const newItem: ItemType = {
      text: text,
      id: id,
      status: "toDo",
    };
    console.log(newItem);
    //создаем фильтрованый массив без старого

    const filtredItems = items.filter((item) => {
      return item.id !== id;
    });
    //добавляем в фильтрованый массив новое значение
    const newArray = [...filtredItems, newItem];
    //сортировать по id( sort, find)
    //устанавливаем setItems
    setItems(newArray);



 //
    //решение черех findIndex:
    // найти элемент , который = id элемента массива
    //
    // нашли элемент , присваниваем ему новое значение
    //
  };
  //из массива найти элемент и поменять в этом элементе значение
  return (
    <div>
      <div id="columns">
        <div className="toDo">
          <ToDoListDisplay
            deleteItem={deleteItem}
            items={items.filter((item) => item.status === "toDo")}
            saveTodo={saveTodo}
          />
        </div>
        <div className="inProgress">
          <ToDoListDisplay
            deleteItem={deleteItem}
            items={items.filter((item) => item.status === "inProgress")}
            saveTodo={saveTodo}
          />
        </div>
        <div className="completed">
          <ToDoListDisplay
            deleteItem={deleteItem}
            items={items.filter((item) => item.status === "completed")}
            saveTodo={saveTodo}
          />
        </div>
      </div>
      <div>
        <ToDoListButtons addText={addText} minusText={minusText} />
      </div>
    </div>
  );
};
