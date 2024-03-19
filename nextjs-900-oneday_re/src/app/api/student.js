import { PrismaClient } from "@prisma/client";

const DB = new PrismaClient();

const studentSelectAll = async () => {
  try {
    const student = await DB.tbl_student.findMany();
    await DB.$disconnect();
    // console.log(student);
    return student;
  } catch (error) {
    console.error("ERROR", error);
    return null;
  }
};
const studentfind = async (s_code) => {
  try {
    const student = await DB.tbl_student.findUnique({
      where: { s_code: s_code },
    });
    return student;
  } catch (error) {}
};

const createStudent = async (data) => {
  await DB.tbl_student.create({ data });
};

const updateStudent = async (data) => {
  const s_code = data.s_code;

  await DB.tbl_student.update({
    where: { s_code },
    data: {
      s_code: data.s_code,
      s_name: data.s_name,
      s_dept: data.s_dept,
      s_grade: data.s_grade,
      s_tel: data.s_tel,
      s_addr: data.s_addr,
    },
  });
};

const deleteStudent = async (s_code) => {
  await DB.tbl_student.delete({ where: { s_code } });
};

export {
  studentSelectAll,
  createStudent,
  updateStudent,
  deleteStudent,
  studentfind,
};
