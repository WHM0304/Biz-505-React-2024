import { useState } from "react";

const TodoList = ({ todoList }) => {
  //   const [TodoList, setTodoList] = useState(["정보처리기사 필기",
  //  "React 학습", "Js 학습", "월요일 저녁", "이번주는 매우 추워"]);

  // 다펼쳐서 item 에 하나씩 담기
  // TodoList.forEach(item =>{})
  const todoItemView = todoList.map((item) => {
    return <div>{item}</div>;
  });

  return <div className="list">{todoItemView}</div>;
};
export default TodoList;
