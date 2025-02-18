"use server";

import { RepresentationWithRegionAndUser } from "@/prisma/types";

import { db } from "@/lib/db";

export const createRepresentation = async (regionId: string, userId: string) => {
    await db.representation.create({
        data: {
            regionId,
            userId,
        },
    });
};

export const getRepresentations = async () => {
    return db.representation.findMany({
        include: {
            Region: {
                include: {
                    FederalDistrict: true,
                },
            },
            User: true,
        },
    });
};

export const getRepresentationByUserId = async (
    userId: string
): Promise<RepresentationWithRegionAndUser | null> => {
    return db.representation.findFirst({
        where: { userId },
        include: {
            Region: {
                include: {
                    FederalDistrict: true,
                },
            },
            User: true,
        },
    });
};
