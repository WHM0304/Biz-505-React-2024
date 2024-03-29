import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todoItem, setTodoItem] = useState("");
  // localstorage 에서 값이있으면 그값을 가져오고 아니면 빈배열
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  });

  const saveStorage = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("KOREA", "대한민국");
  };
  // 어떤 특별한 데이터가 변경되었을때 실행할 이벤트를 설정
  useEffect(saveStorage, [todoList]);

  const todoInsert = () => {
    const newTodoList = [...todoList, { seq: uuid(), todo: todoItem, complete: false }];
    setTodoList(newTodoList);
  };

  const todoDelete = (seq) => {
    const result = todoList.filter((item) => {
      return item.seq !== seq;
    });
    setTodoList(result);
  };

  const todoComplete = (seq) => {
    // 리스트 변화를 주기위한함수
    const result = todoList.map((item) => {
      // todoList 중에 선택한 item 이면
      if (item.seq === seq) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...result]);
  };

  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!!</h1>
      </header>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
      <TodoList todoList={todoList} todoComplete={todoComplete} todoDelete={todoDelete} />
    </div>
  );
};

export default TodoMain;
