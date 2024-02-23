const MemoList = ({ memoList }) => {
  const viewList = memoList.map((item) => <li>{item.memoItem}</li>);

  return <ul>{viewList}</ul>;
};
export default MemoList;
