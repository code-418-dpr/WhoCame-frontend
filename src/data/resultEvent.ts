"use server";
/*
import { ResultEvents } from "@prisma/client";

import { db } from "@/lib/db";

export const getAllResult = async (): Promise<ResultEvents[]> => {
    const results = await db.resultEvents.findMany();
    return results;
};

interface FileServiceResponse {
    value: string[];
}

export const addResultEventFile = async (
    eventId: string,
    files: string[], // Массив файлов в формате Base64
    fileName: string,
    representationId: string | null = null // Параметр по умолчанию
) => {
    try {
        // Проходим по массиву файлов и сохраняем каждый
        for (const fileBase64 of files) {
            const fileBuffer = Buffer.from(fileBase64, "base64"); // Декодируем файл из Base64

            const formData = new FormData();
            formData.append("file", new Blob([fileBuffer]), fileName);

            const response = await fetch(
                `${process.env.FILE_SERVICE_URL}/api/Files?bucketName=files`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data: FileServiceResponse = await response.json();
            console.log(data);
            const filePath = data.value[0] as string;
            console.log(filePath);

            console.log("Размер файла (байты):", fileBuffer.length);
            await db.resultEvents.create({
                data: {
                    eventId,
                    representationId,
                    fileName,
                    filePath,
                },
            });
        }

        console.log("Все файлы успешно добавлены");
    } catch (error) {
        console.error("Ошибка при добавлении файлов:", error);
        throw new Error("Не удалось добавить файлы");
    }
};

export const getResultEventById = async (id: string): Promise<ResultEvents | null> => {
    const result = await db.resultEvents.findUnique({
        where: {
            id,
        },
    });
    return result;
};
*/