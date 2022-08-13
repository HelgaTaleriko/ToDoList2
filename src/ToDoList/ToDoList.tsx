import React, { useState } from "react";
import { ToDoListDisplay } from "./ToDoListDisplay";
import { ToDoListButtons } from "./ToDoListButtons";

export type ItemType = {
  text: string;
  id: number;
  status?: "toDo" | "inProgress" | "completed";
};
export const ToDoList = () => {
  const [items, setItems] = useState<ItemType[]>([{ text: "test", id: 0 }]);
  const addText = (text: string) => {
    //создаем элементы массива
    const newItem: ItemType = {
      text: text,
      id: new Date().valueOf(),
      status: "toDo",
    };
    //создаем массив
    const newArray = [...items, newItem];
    // const array2 = [...items];
    // array2.push(newItem);
    // setItems устанавливает новое значение items
    setItems(newArray);
  };
  const minusText = () => {
    setItems([]);
  };
  // console.log(items);

  //переписать deleteitem
  const deleteItem = (id: number) => {
    const filteredItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filteredItems);
  };
  //решение Миши №1:
  const saveTodo = (text: string, id: number) => {
    //создаем элемент массива
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
    console.log(filtredItems);
    //добавляем в фильтрованый массив новое значение
    const newArray = [...filtredItems, newItem];
    //устанавливаем setItems
    setItems(newArray);
    console.log(newArray);
    console.log(items);
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
      {/*<ToDoListDisplay*/}
      {/*  deleteItem={deleteItem}*/}
      {/*  items={items.filter((item) => item.status === "toDo")}*/}
      {/*/>*/}
      {/*<ToDoListDisplay*/}
      {/*  deleteItem={deleteItem}*/}
      {/*  items={items.filter((item) => item.status === "inProgress")}*/}
      {/*/>*/}
      {/*<ToDoListDisplay*/}
      {/*  deleteItem={deleteItem}*/}
      {/*  items={items.filter((item) => item.status === "completed")}*/}
      {/*/>*/}
      <ToDoListDisplay
        items={items}
        deleteItem={deleteItem}
        saveTodo={saveTodo}
      />
      <ToDoListDisplay
        items={items}
        deleteItem={deleteItem}
        saveTodo={saveTodo}
      />
      <ToDoListButtons addText={addText} minusText={minusText} />
    </div>
  );
};
