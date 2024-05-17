import { nanoid } from "nanoid";
import { useState } from "react";

function Addtesk({ addTodolist }) {
  const [todoTitle, setTodolist] = useState("");
  const [todoContent, setContent] = useState("");

  const addNewtodo = (event) => {
    event.preventDefault();
    if (!todoTitle.trim() || !todoContent.trim()) {
      alert("빈칸을 입력하지마!");
      return;
    }
    const newTodolist = {
      id: nanoid(),
      todoTitle,
      todoContent,
      isDone: false,
    };
    addTodolist(newTodolist);
  };
  return (
    <>
      <form onSubmit={addNewtodo}>
        <label htmlFor="todoTitle">제목</label>
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => {
            setTodolist(event.target.value);
          }}
        />
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          value={todoContent}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </>
  );
}

export default Addtesk;
