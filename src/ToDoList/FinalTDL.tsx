import { ToDoList } from "./ToDoList";
import "./ToDoList.css";

export const FinalTDL = () => {
  return (
    <div className="container">
      <div className="header">Header</div>
      <ToDoList />
      <div className="footer">Footer</div>
    </div>
  );
};
