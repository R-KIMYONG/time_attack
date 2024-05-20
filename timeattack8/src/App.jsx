import React from "react";
import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform";
import Todoscontainer from "./components/Todoscontainer";

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
      <Addform setTodos={setTodos} />
      <Todoscontainer todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
