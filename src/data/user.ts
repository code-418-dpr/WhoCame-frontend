"use server";

import { Prisma, User, UserRole } from "@prisma/client";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string): Promise<User | null> => {
    return db.user.findUnique({ where: { email } });
};

export const getUserById = async (id: string): Promise<User | null> => {
    return db.user.findUnique({ where: { id } });
};

export const getUserByTgId = async (tgId: number): Promise<User | null> => {
    return db.user.findUnique({ where: { telegramId: tgId } });
};

export const updateUserTelegramId = async (
    id: string,
    telegramId: number
): Promise<User | null> => {
    return db.user.update({ where: { id }, data: { telegramId } });
};

export const deleteUserTelegramId = async (telegramId: number): Promise<Prisma.BatchPayload> => {
    return db.user.updateMany({ where: { telegramId }, data: { telegramId: null } });
};

export const createUser = async (email: string, password: string, name?: string): Promise<User> => {
    return db.user.create({ data: { email, password, name } });
};

export const updateUser = async (id: string, name: string, email: string) => {
    await db.user.update({ where: { id }, data: { name, email } });
};

export const getAdministrator = async (): Promise<User | null> => {
    return db.user.findFirst({ where: { role: UserRole.CENTRAL_REP } });
};

export const updateUserNotifications = async (
    id: string,
    telegramNotifications: boolean,
    emailNotifications: boolean
) => {
    await db.user.update({ where: { id }, data: { telegramNotifications, emailNotifications } });
};
