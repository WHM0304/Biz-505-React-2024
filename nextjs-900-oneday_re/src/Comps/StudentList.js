"use client";
import { studentSelectAll } from "@/app/api/student";
import styles from "./LeftSide.module.css";
import { useEffect, useState } from "react";

export default ({ setS_code }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await studentSelectAll();
        setStudents([...result]);
      } catch (error) {
        console.log({
          error: error,
        });
      }
    };
    fetchData();
  }, []);
  const viewList = students.map((item) => {
    return (
      <>
        <li key={item.s_code} onClick={() => setS_code(item.s_code)}>
          <span>{item.s_code}</span>
          <span>{item.s_name}</span>
        </li>
      </>
    );
  });
  return (
    <div className={styles.list}>
      <ul className={styles.ul}>
        <li>
          <span> 학번</span>
          <span>이름</span>
        </li>
      </ul>
      <ul className={styles.body}>{viewList}</ul>
    </div>
  );
};
