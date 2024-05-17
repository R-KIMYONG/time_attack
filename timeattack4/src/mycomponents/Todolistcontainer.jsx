import Todolist from "./Todolist";

const Todolistcontainer = ({ todolist, setTodolist }) => {
  return (
    <>
      <Todolist todolist={todolist} setTodolist={setTodolist} iswork={false} />
      <Todolist todolist={todolist} setTodolist={setTodolist} iswork={true} />
    </>
  );
};

export default Todolistcontainer;
