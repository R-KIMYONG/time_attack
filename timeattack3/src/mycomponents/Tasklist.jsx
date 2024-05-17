import Todolist from "./Todolist";


const Tasklist = ({todolist,setTodolist}) => {
  return (
    <>
     <Todolist todolist={todolist} setTodolist={setTodolist} iswork={false}/>
     <Todolist todolist={todolist} setTodolist={setTodolist} iswork={true}/>
    </>
  );
};

export default Tasklist;
