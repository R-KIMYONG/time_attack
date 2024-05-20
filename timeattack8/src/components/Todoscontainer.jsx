import Todolist from "./Todolist";

const Todoscontainer = ({ todos, setTodos }) => {
  return (
    <>
      <Todolist todos={todos} setTodos={setTodos} iswork={false} />
      <Todolist todos={todos} setTodos={setTodos} iswork={true} />
    </>
  );
};

export default Todoscontainer;
