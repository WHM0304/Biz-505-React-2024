import styles from "@/app/notice/input/input.module.css";
/**
 * 공지사항 작성하기
 * 작성자, 제목, 내용, 중요도
 * 저장버튼
 */

const NoticeInput = () => {
  return (
    <>
      <h1>공지사항작성하기</h1>
      <div className={styles.inputBox}>
        <input
          type="search"
          placeholder="작성자입력"
          name="author"
        ></input>
        <input type="text" placeholder="제목" name="title"></input>
        <input
          type="textLongMessage"
          placeholder="내용"
          name="memo"
        ></input>
        <input
          type="range"
          placeholder="중요도"
          name="important"
        ></input>
        <input type="button" value="저장"></input>
      </div>
    </>
  );
};
export default NoticeInput;
