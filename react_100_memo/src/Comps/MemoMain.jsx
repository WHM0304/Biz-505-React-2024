import MemoInput from "../Comps/MemoInput";
import MemoList from "../Comps/MemoList";
import MemoItem from "../Comps/MemoItem";
import "../css/MemoMain.css";
import { useState } from "react";

const MemoMain = () => {
  const [memoList, setMemoList] = useState([]);
  return (
    <div className="main">
      <div className="list">
        <MemoItem />
        <MemoList memoList={memoList}>설산의 고원</MemoList>
      </div>
      <MemoInput />
    </div>
  );
};

export default MemoMain;
