"use client";
import css from "@/css/insert.module.css";
import { useState } from "react";

const OrderInsert = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const { text } = e.target.value;
    setSearch(text);
  };
  return (
    <div className={css.main}>
      <h1>
        <strong>주문번호 : </strong>
        <strong>O01001</strong>
      </h1>
      <form className={css.form}>
        <div>
          <input
            placeholder="고객코드"
            value={search}
            onChange={changeHandler}
          />
        </div>
        <div className={css.button}>
          <button>검색</button>
        </div>
      </form>
      <div className={css.list}>
        <ul>
          <li>
            <storng>고객코드 : </storng>
            <sapn>C0020</sapn>
          </li>
          <li>
            <storng>고객명 : </storng>
            <sapn>홍길동</sapn>
          </li>
          <li>
            <storng>연락처 : </storng>
            <sapn>010-1111-1111</sapn>
          </li>
        </ul>
      </div>
      <form className={css.form}>
        <div>
          <input placeholder="상품코드" />
        </div>
        <div className={css.button}>
          <button>검색</button>
        </div>
      </form>
      <form className={css.form}>
        <div>
          <input placeholder="주문수량" />
        </div>
        <div className={css.button}>
          <button>상품추가</button>
        </div>
      </form>
      <div className={css.productList}>
        <ul>
          <li>상품코드</li>
          <li>상품명</li>
          <li>주문수량</li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default OrderInsert;
