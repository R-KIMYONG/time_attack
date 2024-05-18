import TodoItem from "./TodoItem";

const Todocontainer = ({ setTodos, todos }) => {
  return (
    <>
      <TodoItem setTodos={setTodos} todos={todos} isWork={false} />
      <TodoItem setTodos={setTodos} todos={todos} isWork={true} />
    </>
  );
};

export default Todocontainer;
