import { useState } from "react";
import { nanoid } from "nanoid";
const Addform = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddtodo = (event) => {``
    event.preventDefault();
    if (!title || !content) {
      alert("빈칸있으면 안됩니다.");
      return;
    }
    let newTodos = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleAddtodo}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="title">내용</label>
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
