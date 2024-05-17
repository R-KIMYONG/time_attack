function Todolist({ todolist, isWork,setTodolist }) {


    const toggletBtn = (todolistId) => {
        const updateTodolist = todolist.map((item) =>
          item.id === todolistId ? { ...item, isDone: !item.isDone } : item
        );
        setTodolist(updateTodolist);
      };
      const deletBtn = (todolistId) => {
        const updateTodolist = todolist.filter((item) => item.id !== todolistId);
        setTodolist(updateTodolist);
      };


  return (
    <>
      <h3>{isWork ? "Working list" : "Done list"} </h3>
      <ul>
        {todolist
          .filter((item) => (isWork ? !item.isDone : item.isDone))
          .map((item) => (
            <li key={item.id}>
              <h3>{item.todoTitle}</h3>
              <h3>{item.todoContent}</h3>
              <button
                onClick={() => {
                  deletBtn(item.id);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  toggletBtn(item.id);
                }}
              >
                {isWork ? "완료" : "취소"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todolist;
