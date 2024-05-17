const Todolist = ({ todolist, setTodolist, iswork }) => {
  const toggleBtn = (itemId) => {
    const updateTodolist = todolist.map((item) =>
      item.id === itemId ? { ...item, isDone: !item.isDone } : item
    );
    setTodolist(updateTodolist);
  };

  const delTodolist = (itemId) => {
    const updateTodolist = todolist.filter((item) => item.id !== itemId);
    setTodolist(updateTodolist);
  };

  return (
    <>
      <h3>{!iswork ? "Working list" : "Done list"}</h3>
      <ul>
        {todolist
          .filter((item) => (iswork ? item.isDone : !item.isDone))
          .map((item) => (
            <li>
              <h3>{item.title}</h3>
              <h3>{item.content}</h3>
              <button
                onClick={() => {
                  delTodolist(item.id);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  toggleBtn(item.id);
                }}
              >
                {iswork ? "취소" : "완료"}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todolist;
