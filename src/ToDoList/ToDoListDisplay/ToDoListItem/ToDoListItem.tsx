import React from "react";
type Iprops = {
  text: string;
};
export const ToDoListItem = ({ text }: Iprops) => {
  return <li>{text}</li>;
};
