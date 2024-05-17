import React from "react";
import { useState } from "react";
import "./App.css";
import Listform from "./components/Listform";
import Addform from "./components/Addform";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const completBtn = (todoId) => {
    let updateTodo = todo.map((item) =>
      item.id === todoId ? { ...item, isDone: !item.isDone } : item
    );

    setTodo(updateTodo);
  };

  const delteBtn = (todoId) => {
    let updateTodo = todo.filter((item) => item.id !== todoId);
    setTodo(updateTodo);
  };

  return (
    <div id="main">
      <nav>
        <div>
          <h1>Mytodolist</h1>
        </div>
        <div>
          <h1>react</h1>
        </div>
      </nav>
      <Addform addTodo={addTodo} />
      <Listform
        todo={todo}
        addTodo={addTodo}
        completBtn={completBtn}
        delteBtn={delteBtn}
      />
    </div>
  );
};

export default App;
