const TodoItem = ({ setTodos, todos, isWork }) => {
  const toggleTodo = (itemId) => {
    const newTodos = todos.map((item) =>
      item.id === itemId ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(newTodos);
  };

  const delTodo = (itemId) => {
    const newTodo = todos.filter((item) => item.id !== itemId);
    setTodos(newTodo);
  };

  return (
    <>
      <h3>{!isWork ? "Working list" : "Done list"}</h3>
      <ul>
        {todos
          .filter((item) => (isWork ? item.isDone : !item.isDone))
          .map((item) => (
            <li>
              <h3>{item.title}</h3>
              <h3>{item.content}</h3>
              <div id="btn">
                <button
                  onClick={() => {
                    delTodo(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    toggleTodo(item.id);
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
export default TodoItem;
