const Todolist = ({ todos, setTodos, iswork }) => {
  const handleToggletodo = (itemId) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDeltodo = (itemId) => {
    setTodos((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <h3>{iswork ? "Done list" : "Working list"}</h3>

      <ul>
        {todos
          .filter((item) => (iswork ? item.isDone : !item.isDone))
          .map((item) => (
            <li key={item.id} id={item.id}>
              <h3>{item.title}</h3>
              <h3>{item.contents}</h3>
              <div>
                <button
                  onClick={() => {
                    handleDeltodo(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleToggletodo(item.id);
                  }}
                >
                  {iswork ? "취소" : "완료"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todolist;
