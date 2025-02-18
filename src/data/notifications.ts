import { db } from "@/lib/db";

export const createNotification = async (userId: string, title: string, message: string) => {
    await db.notification.create({ data: { userId, title, message } });
};

export const getNotifications = async (userId: string) => {
    return db.notification.findMany({
        where: { userId },
        orderBy: {
            createdAt: "desc",
        },
    });
};
