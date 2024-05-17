import React from "react";
import { useState } from "react";
import "./App.css";
import Addform from "./mycomponents/Addform";
import Tasklist from "./mycomponents/Tasklist";
   
const App = () => {
  const [todolist, setTodolist] = useState([]);
  return (
    <div id="main">
      <header>
        <nav>
          <h2>Mytodolist</h2>
          <h2>React</h2>
        </nav>
      </header>
      <Addform setTodolist={setTodolist} todolist={todolist} />
      <Tasklist todolist={todolist} setTodolist={setTodolist}/>
    </div>
  );
};

export default App;
