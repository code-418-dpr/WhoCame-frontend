"use server";

import { SupportMessage } from "@prisma/client";

import { db } from "@/lib/db";

export const createSupportMessage = async (
    tgAuthorId: number,
    request: string
): Promise<SupportMessage> => {
    return db.supportMessage.create({ data: { tgAuthorId, request } });
};

export const answerSupportMessage = async (
    id: string,
    response: string
): Promise<SupportMessage> => {
    return db.supportMessage.update({ where: { id }, data: { response, solved: true } });
};
