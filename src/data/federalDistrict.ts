"use server";

import { FederalDistrict } from "@prisma/client";

import { db } from "@/lib/db";

export const getAllFederalDistricts = async (): Promise<FederalDistrict[]> => {
    return db.federalDistrict.findMany();
};
