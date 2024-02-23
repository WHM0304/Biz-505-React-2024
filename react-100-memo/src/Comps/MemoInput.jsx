const MemoInput = ({ memoItem, setMemoItem, memoInsert }) => {
  const onInserHandler = () => {
    memoInsert();
  };
  const onChangeHandler = (e) => {
    const target = e.target.value;
    setMemoItem(target);
  };
  return (
    <>
      <input type="text" value={memoItem} placeholder="메모제목" onChange={onChangeHandler} />
      <input type="text" placeholder="메모내용" />
      <input type="file" />
      <input type="button" value={"추가"} onClick={onInserHandler} />
      <input type="hidden" value={"삭제"} />
    </>
  );
};

export default MemoInput;
