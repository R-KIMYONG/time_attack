import React, { useState } from "react";
import "./App.css";
import Addtesk from "./components/Addtesk.jsx";
import Tasklist from "./components/Tasklist.jsx";

const App = () => {
  const [todolist, setTodolist] = useState([]);

  function addTodolist(newitem) {
    setTodolist([...todolist, newitem]);
  }


  return (
    <div id="main">
      <header>
        <nav>
          <h3>mytodolist</h3>
          <h3>react</h3>
        </nav>
      </header>

      <Addtesk addTodolist={addTodolist} />
      <Tasklist
        todolist={todolist}
        setTodolist={setTodolist}
      />
    </div>
  );
};

export default App;
