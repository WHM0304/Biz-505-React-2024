// seq 와 todo 구성요소를 갖는 JSON 객체 데이터 3개를 포함하는 배열
// JSON : JavaScript Object Notation

import { useState } from "react";

//  JSON = { 변수 : 값 } , {변수1 : 값, 변수2 : 값}
const todoListSample = [
  { seq: 1, todo: "React 시작" },
  { seq: 2, todo: "UI 구현" },
  { seq: 3, todo: "Spring 서버" },
  { seq: 4, todo: "점심" },
  { seq: 5, todo: "저녁" },
  { seq: 6, todo: "비옴" },
];

const TodoList = () => {
  // todoListSample 데이터가 채워진 todoList 상태 변수배열 시작하기
  const [todoList, setTodoList] = useState(todoListSample);

  // exec/array.js 참조!!
  // todoList.forEach((todo) => console.log(todo));
  // todoList.filter();

  const viewList = todoList.map((item) => <div className="todoItem">{item.todo}</div>);

  return <>{viewList}</>;
};

export default TodoList;
