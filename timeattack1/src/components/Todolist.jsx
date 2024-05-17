function Todolist({ todo, completBtn, delteBtn, isWoking }) {
  return (
    <>
      <div>
        <h3>{isWoking ? "Working list" : "Done list"}</h3>
      </div>
      <ul>
        {todo
          .filter((item) => (isWoking ? item.isDone : !item.isDone))
          .map((item) => (
            <li key={item.id} id={item.id}>
              <h3>{item.title}</h3>
              <h3>{item.content}</h3>
              <div>
                <button
                  onClick={() => {
                    delteBtn(item.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    completBtn(item.id);
                  }}
                >
                  {item.isDone ? "완료" : "취소"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todolist;
