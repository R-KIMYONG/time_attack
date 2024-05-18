import React from "react";
import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform.jsx";
import Todocontainer from "./components/Todocontainer";

const App = () => {
  const [todos,setTodos]=useState([])
  return (
    <div id="main">
      <header>
        <nav>
          <h3>Mytodolist</h3>
          <h3>React</h3>
        </nav>
      </header>
      <Addform setTodos={setTodos} todos={todos}/>
      <Todocontainer setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;
