import { nanoid } from "nanoid";
import { useState } from "react";
const Addform = ({ setTodolist, todolist }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addFormBtn = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("빈칸있으면 안됩니다.");
      return;
    }

    const newTodolist = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    setTodolist([...todolist, newTodolist]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={addFormBtn}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">내용</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button>추가</button>
      </form>
    </>
  );
};

export default Addform;
