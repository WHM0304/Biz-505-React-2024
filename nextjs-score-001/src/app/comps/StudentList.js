const studentList = ({ studentList }) => {
  const viewList = studentList.map((item) => (
    <li key={item.st_num}>{item.st_name}</li>
  ));
  return (
    <>
      <h1>학생리스트</h1>
      <ul>{viewList}</ul>
    </>
  );
};

export default studentList;
