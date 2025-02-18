"use server";

import { SportObject } from "@prisma/client";

import { db } from "@/lib/db";

export const createSportObject = async (
    name: string,
    address: string
): Promise<SportObject | null> => {
    return db.sportObject.create({ data: { name, address } });
};
