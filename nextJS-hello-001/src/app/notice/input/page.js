import { useState } from "react";

/**
 * 공지사항 작성하기
 * 작성자, 제목, 내용, 중요도
 * 저장버튼
 */

const NoticeInput = () => {
  return (
    <>
      <h1>공지사항작성하기</h1>
      <input
        type="text"
        placeholder="작성자입력"
        name="author"
      ></input>
      <input type="text" placeholder="제목" name="title"></input>
      <input type="text" placeholder="내용" name="memo"></input>
      <input
        type="text"
        placeholder="중요도"
        name="important"
      ></input>
      <input type="button" value="저장"></input>
    </>
  );
};
export default NoticeInput;
