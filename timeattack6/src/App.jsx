import React from "react";
import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform.jsx";
import Todocontainer from "./components/Todocontainer.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div id="main">
      <header>
        <nav>
          <h3>Mytodolist</h3>
          <h3>React</h3>
        </nav>
      </header>
      <Addform todos={todos} setTodos={setTodos} />
      <Todocontainer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
