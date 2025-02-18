import { UserRole } from "@prisma/client";
import * as z from "zod";

export const PersonalSettingsSchema = z.object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.CENTRAL_REP, UserRole.REGIONAL_REP]),
    email: z.optional(z.string().email()),
});

export const PasswordSettingsSchema = z
    .object({
        currentPassword: z.optional(z.string().min(6)),
        newPassword: z.optional(z.string().min(6)),
    })
    .refine(
        (data) => {
            return !(data.currentPassword && !data.newPassword);
        },
        {
            message: "Новый пароль обязателен к заполнению",
            path: ["newPassword"],
        }
    )
    .refine(
        (data) => {
            return !(data.newPassword && !data.currentPassword);
        },
        {
            message: "Текущий пароль обязателен к заполнению",
            path: ["currentPassword"],
        }
    );

export const SetPasswordSchema = z
    .object({
        password: z.optional(
            z.string().min(4, { message: "Пароль должен быть длиннее 4 символов" })
        ),
        repeatPassword: z.optional(
            z.string().min(4, { message: "Пароль должен быть длиннее 4 символов" })
        ),
    })
    .refine(
        (data) => {
            return data.password === data.repeatPassword;
        },
        {
            message: "Пароли не совпадают",
            path: ["repeatPassword"],
        }
    );

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email обязателен к заполнению",
    }),
    password: z.string().min(1, {
        message: "Пароль обязателен к заполнению",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Имя обязательно к заполнению",
    }),
    email: z.string().email({
        message: "Email обязателен к заполнению",
    }),
    region: z.string().min(1, {
        message: "Регион обязателен к заполнению",
    }),
});
