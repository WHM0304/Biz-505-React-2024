"use client";
import { studentfind } from "@/app/api/student";
import { useState, useEffect } from "react";
export default ({ s_code }) => {
  const [student, setStudent] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      const result = await studentfind(s_code);
      const student = result[0];
      setStudent(student);
      console.log(student);
    };
    fetchStudent();
  }, [s_code]);

  return (
    <aside>
      <p>s_code : {student.s_code}</p>
      dd
    </aside>
  );
};
