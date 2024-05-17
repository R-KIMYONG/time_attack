import Todolist from "./Todolist";

function Listform({ todo, completBtn, delteBtn }) {
  return (
    <>
      <Todolist
        todo={todo}
        completBtn={completBtn}
        delteBtn={delteBtn}
        isWoking={true}
      />
      <Todolist
        todo={todo}
        completBtn={completBtn}
        delteBtn={delteBtn}
        isWoking={false}
      />
    </>
  );
}

export default Listform;
