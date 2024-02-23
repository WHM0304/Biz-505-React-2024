import "../css/MemoItem.css";

const MemoItem = () => {
  return (
    <div className="input_box">
      <input type="text" value={"2024-02-23"} />
      <input type="text" value={"09:33:00"} />
      <input type="button" value={"새로작성"} />
    </div>
  );
};

export default MemoItem;
