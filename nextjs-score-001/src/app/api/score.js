"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findBystNum = (st_num) => {
  try {
    const result = prisma.tbl_score.findMany({
      // where : {st_num : st_num}
      where: { s_stnum: st_num },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};