"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";

// import 한 selectAll 함수를 st_selectAll 이라는 이름으로 사용하겠다.
import { selectAll as st_selectAll } from "@/app/api/student";
import { findByPk as st_findByPk } from "@/app/api/student";
import StudentDetail from "./comps/StudentDetail";
import ScoreList from "./comps/ScoreList";
import { findBystNum } from "./api/score";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [stNum, setStNum] = useState("");
  const [sList, setSList] = useState([]);

  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      if (result) {
        setStudentList([...result]);
      }
    };
    stdFetch();
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      setScoreList([]);
      const result = await findBystNum(stNum);
      if (result) {
        setScoreList([...result]);
      }
    };
    scoreFetch();
  }, [stNum]);
  useEffect(() => {
    const stNFetch = async () => {
      // stNum 이 null 이면 S0001 을 표기해라
      const result = await st_findByPk(stNum ?? "S0001");
      if (result) setSList([...result]);
    };
    stNFetch();
  }, [stNum]);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList studentList={studentList} setStNum={setStNum} />
      </section>
      <section className={styles.detail}>
        <StudentDetail sList={sList}>
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
