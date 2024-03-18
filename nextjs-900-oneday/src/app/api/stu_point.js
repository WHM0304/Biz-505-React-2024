import { PrismaClient } from "@prisma/client";

const DB = new PrismaClient();

const stu_p_SelectAll = async () => {
  try {
    const point = await DB.tbl_stu_point.findMany();
    await DB.$disconnect();
    return point;
  } catch (error) {
    return null;
  }
};

const create_stu_p = async (data) => {
  await DB.tbl_stu_point.create({ data });
};

const update_stu_p = async (data) => {
  const r_scode = data.r_scode;
  const r_pcode = data.r_pcode;
  const r_pscore = data.r_pscore;
  await DB.tbl_stu_point.update({
    where: { r_scode, r_pcode },
    data: {
      r_scode,
      r_pcode,
      r_pscore,
    },
  });
};

export { create_stu_p, stu_p_SelectAll, update_stu_p };
