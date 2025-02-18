import { db } from "@/lib/db";

export const getAccountByUserId = async (userId: string) => {
    return db.account.findFirst({ where: { userId } });
};
