import { nanoid } from "nanoid";
import { useState } from "react";

const Addform = ({ setTodos, todos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodolist = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("빈칸 있으면안됩니다.");
      return;
    }

    const newTodolist = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodolist]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={addTodolist}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default Addform;
