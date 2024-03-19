import css from "@/css/detail.list.module.css";
const StudentDetail = ({ children, sList }) => {
  const viewList = sList.map((item) => (
    <>
      <li className={css.item}>
        <strong>학번</strong>
        <span>{item.st_num}</span>
      </li>
      <li className={css.item}>
        <strong>이름</strong>
        <span>{item.st_name}</span>
      </li>
      <li className={css.item}>
        <strong>학과</strong>
        <span>{item.st_dept}</span>
      </li>
      <li className={css.item}>
        <strong>학년</strong>
        <span>{item.st_grade}</span>
      </li>
      <li className={css.item}>
        <strong>전화번호</strong>
        <span>{item.st_tel}</span>
      </li>
      <li className={css.item}>
        <strong>주소</strong>
        <span>{item.st_addr}</span>
      </li>
    </>
  ));
  return (
    <>
      <h1>학생정보 자세히보기</h1>
      <ul className={css.body}>{viewList}</ul>
      {children}
    </>
  );
};

export default StudentDetail;
