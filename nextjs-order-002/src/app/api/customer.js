"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CUSTOMER = prisma.tbl_customer;

export const findByCustomer = async (key) => {
  console.log("검색어", key);
  const result = await CUSTOMER.findMany({
    where: {
      c_name: {
        contains: key,
      },
    },
  });
  console.log(result);
  return result;
};
