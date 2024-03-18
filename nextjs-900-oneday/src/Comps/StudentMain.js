"use client";
import StudentList from "./StudentList";
import styles from "./StudentMain.module.css";
import StudentDetail from "./StudentDetail";
import { useEffect, useState } from "react";
import Ex_student from "./ex_student";
export default () => {
  const [s_code, setS_code] = useState("");

  console.log(s_code);
  return (
    <section className={styles.main}>
      <div className={styles.left}>
        <StudentList setS_code={setS_code} />
        {/* <Ex_student setS_code={setS_code} /> */}
      </div>
      <div className={styles.right}>
        {s_code && <StudentDetail s_code={s_code} />}
      </div>
    </section>
  );
};
