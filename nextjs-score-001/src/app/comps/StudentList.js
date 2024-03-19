const studentList = ({ studentList, setStNum }) => {
  // onclick={()=>setStudent(item)}
  const viewList = studentList.map((item) => (
    <>
      <li
        key={item.st_num}
        onClick={() => setStNum(`${item.st_num}`)}
      >
        <span>{item.st_dept}</span>
        <strong>{item.st_num}</strong>
        <strong>{item.st_name}</strong>
      </li>
    </>
  ));
  return (
    <>
      <h1>학생리스트</h1>
      <ul>{viewList}</ul>
    </>
  );
};

export default studentList;
