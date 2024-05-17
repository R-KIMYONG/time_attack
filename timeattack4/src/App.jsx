import { useState } from "react";
import "./App.css";
import Addform from "./mycomponents/Addform";
import Todolistcontainer from "./mycomponents/Todolistcontainer";

const App = () => {
  const [todolist, setTodolist] = useState([]);

  return (
    <div id="main">
      <header>
        <nav>
          <h3>Mytodolist4</h3>
          <h3>React</h3>
        </nav>
      </header>
      <Addform setTodolist={setTodolist} todolist={todolist} />

      <Todolistcontainer todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
};

export default App;
