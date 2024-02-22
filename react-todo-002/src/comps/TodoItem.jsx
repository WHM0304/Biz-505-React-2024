const TodoItem = ({ item, todoComplete, todoDelete }) => {
  const onCompleteClick = (seq) => {
    todoComplete(seq);
  };
  // props drilling
  const onDeleteClick = (seq) => {
    if (window.confirm("TODO 데이터를 삭제할까여 ?")) {
      todoDelete(seq);
    }
  };

  return (
    <div className="todoItem">
      <div
        className="delete"
        onClick={() => {
          onDeleteClick(item.seq);
        }}
      >
        &times;
      </div>
      <div className={item.complete ? "content ok" : "content"} onClick={() => onCompleteClick(item.seq)}>
        {item.todo}
      </div>
      <div className="complete">&#x2713;</div>
    </div>
  );
};

export default TodoItem;
