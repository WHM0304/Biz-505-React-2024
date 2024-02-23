import "../css/MemoInput.css";

const MemoInput = () => {
  return (
    <div className="input">
      <input type="text" placeholder="제목을 입력하세요" />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value={"저장"} />
    </div>
  );
};

export default MemoInput;
