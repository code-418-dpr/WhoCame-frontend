"use server";

import { createNotification } from "@/data/notifications";
import { getAdministrator } from "@/data/user";
import { User } from "@prisma/client";

import { sendEmail } from "@/lib/mail";

export async function sendEventAcceptedNotification(user: User, eventTitle: string) {
    const title = "Ваша заявка на проведение события принята!";
    const message = `Ваша заявка на проведение события "${eventTitle}" принята!`;

    await sendNotification(user, title, message);
}

export async function sendEventDeclinedNotification(
    user: User,
    eventTitle: string,
    refusalReason: string
) {
    const title = "Ваша заявка на проведение события отклонена";
    const message = `Ваша заявка на проведение события "${eventTitle}" отклонена по причине: ${refusalReason}`;

    await sendNotification(user, title, message);
}

export async function sendNewEventRequestNotification(eventTitle: string) {
    const administrator = await getAdministrator();
    if (administrator) {
        const title = "Новая заявка на проведение события";
        const message = `Поступила новая заявка на проведение события "${eventTitle}"`;
        await sendNotification(administrator, title, message);
    }
}

export async function sendNewRepresentationRequestNotification(name: string) {
    const administrator = await getAdministrator();
    if (administrator) {
        const title = "Новая заявка на регистрацию регионального представительства";
        const message = `Поступила новая заявка на регистрацию регионального представительства от ${name}`;
        await sendNotification(administrator, title, message);
    }
}

async function sendNotification(user: User, title: string, message: string) {
    await createNotification(user.id, title, message);

    if (user.emailNotifications) {
        await sendEmail(user.email!, title, message);
    }

    try {
        if (user.telegramId && user.telegramNotifications) {
            await fetch(`${process.env.BOT_URL}/notifications/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_ids: [Number(user.telegramId)], message }),
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export async function sendRepresentationAcceptedNotification(email: string, url: string) {
    const title = "Ваша заявка на регистрацию регионального представительства принята!";
    const message = `Перейдите по ссылке для завершения регистрации: ${url}`;

    await sendEmail(email, title, message);
}

export async function sendRepresentationDeclinedNotification(email: string, refusalReason: string) {
    const title = "Ваша заявка на регистрацию регионального представительства отклонена";
    const message = `Ваша заявка на регистрацию регионального представительства отклонена по причине: ${refusalReason}`;

    await sendEmail(email, title, message);
}
