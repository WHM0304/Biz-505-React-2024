"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

export const findByPName = async (pname) => {
  const result = await PRODUCT.findMany({
    where: {
      p_name: { contains: pname },
    },
  });
  return result;
};
