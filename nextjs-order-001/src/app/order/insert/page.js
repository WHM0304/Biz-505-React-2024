"use client";
import { selectAll } from "@/app/api/customer";
import css from "@/css/insert.module.css";
import { useEffect, useState } from "react";

const OrderInsert = () => {
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState([]);
  // 고객코드 이펙트
  useEffect(() => {
    const getCustomer = async (c_code) => {
      const result = await selectAll(c_code);
    };
  });

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
          <input placeholder="상품코드" value={search} />
        </div>
        <div className={css.button}>
          <button>검색</button>
        </div>
      </form>
      <form className={css.form}>
        <div>
          <input placeholder="주문수량" value={search} />
        </div>
        <div className={css.button}>
          <button>상품추가</button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default OrderInsert;
