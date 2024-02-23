import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import uuid from "react-uuid";

// MemoLeft , MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft , MemoRight 의 children 으로 보내서 컴포넌트를 "합성"하기
import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import { useState } from "react";
import { useEffect } from "react";

const MemoMain = () => {
  const [memoItem, setMemoItem] = useState("");
  const [memoList, setMemoList] = useState(() => {
    return localStorage.getItem("memoList") ? JSON.parse(localStorage.getItem("memoList")) : [];
  });

  const saveStorage = () => {
    localStorage.setItem("memoList", JSON.stringify(memoList));
  };
  useEffect(saveStorage, [memoList]);

  const memoInsert = () => {
    const newMemoList = [...memoList, { seq: uuid(), memoItem: memoItem }];
    setMemoList(newMemoList);
  };

  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate />
          <MemoList memoList={memoList} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput memoItem={memoItem} setMemoItem={setMemoItem} memoInsert={memoInsert} />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
