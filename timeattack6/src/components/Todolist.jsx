const Todolist = ({ todos, setTodos, isWork }) => {
  const handleToggleTodos = (itemId) => {
    const updateTodos = todos.map((item) =>
      item.id === itemId ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(updateTodos);
  };

  const handleDelTodos = (itemId) => {
    const updateTodos = todos.filter((item) => item.id !== itemId);

    setTodos(updateTodos);
  };

  return (
    <>
      <h3>{isWork ? "Done list" : "Working list"}</h3>
      <ul>
        {todos
          .filter((item) => (isWork ? item.isDone : !item.isDone))
          .map((item) => (
            <li id={item.id} key={item.id}>
              <h3>{item.title}</h3>
              <h3>{item.content}</h3>
              <div>
                <button
                  onClick={() => {
                    handleDelTodos(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleToggleTodos(item.id);
                  }}
                >
                  {isWork ? "취소" : "완료"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todolist;
