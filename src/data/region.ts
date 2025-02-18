"use server";

import { Region } from "@prisma/client";

import { db } from "@/lib/db";

export const getAllRegions = async (): Promise<Region[]> => {
    return db.region.findMany();
};
