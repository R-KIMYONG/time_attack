import { useState } from "react";
import { nanoid } from "nanoid";

const Addform = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleAddform = (e) => {
    e.preventDefault();

    if (!title || !contents) {
      alert("빈칸있으면 안됩니다.");
      return;
    }
    let newTodos = {
      id: nanoid(),
      title,
      contents,
      isDone: false,
    };
    // setTodos([...todos, newTodos]);
    setTodos((prev)=>[...prev,newTodos])
    setTitle("");
    setContents("");
  };

  return (
    <>
      <form onSubmit={handleAddform}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="contents">내용</label>
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default Addform;
