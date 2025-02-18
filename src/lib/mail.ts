"use server";

import nodemailer from "nodemailer";

export async function sendEmail(to: string, subject: string, text: string): Promise<boolean> {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            encoding: "base64",
            textEncoding: "base64",
        });
        return true;
    } catch (error) {
        console.error(`Error: ${error}`);
        return false;
    }
}
