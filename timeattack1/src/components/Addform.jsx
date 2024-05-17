import { useState } from "react";
import { nanoid } from "nanoid";

function Addform({ addTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitForm = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("빈칸있으면 안됨!");
      return;
    }
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: true,
    };

    addTodo(newTodo);
    setTitle("");
    setContent("");
  };

  return (
    <form id="submit-conetent" onSubmit={submitForm}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button>추가</button>
    </form>
  );
}
export default Addform;
