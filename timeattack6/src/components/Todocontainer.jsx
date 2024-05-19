import Todolist from "./Todolist";

const Todocontainer = ({ todos, setTodos }) => {
  return (
    <>
      <Todolist todos={todos} setTodos={setTodos} isWork={false} />
      <Todolist todos={todos} setTodos={setTodos} isWork={true} />
    </>
  );
};
export default Todocontainer;
