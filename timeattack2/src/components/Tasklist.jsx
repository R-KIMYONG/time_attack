import Todolist from "./Todolist";
function Tasklist({ todolist, setTodolist }) {
  return (
    <>
      <Todolist
        todolist={todolist}
        isWork={true}
        setTodolist={setTodolist}
      />
      <Todolist
        todolist={todolist}
        isWork={false}
        setTodolist={setTodolist}
      />
    </>
  );
}

export default Tasklist;
