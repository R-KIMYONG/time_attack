import React from "react";
import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform";
import TodosContainer from "./components/TodosContainer";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div id="main">
      <header>
        <nav>
          <h3>Myyodolist</h3>
          <h3>React</h3>
        </nav>
      </header>

      <Addform todos={todos} setTodos={setTodos} />
      <TodosContainer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
