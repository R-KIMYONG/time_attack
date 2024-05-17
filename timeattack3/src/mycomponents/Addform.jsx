import { useState } from "react";
import { nanoid } from 'nanoid'
const Addform = ({ setTodolist,todolist }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodolist = (event) => {
    event.preventDefault();

    if (!title || !content) {
      alert("빈칸 있으면안됩니다.");
      return;
    }
 
    let newTodolist={
        id:nanoid(),
        title,
        content,
        isDone:false
    }
    setTodolist([...todolist,newTodolist])
    setTitle('')
    setContent('')
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
        <label htmlFor="title">내용</label>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </>
  );
};

export default Addform;
