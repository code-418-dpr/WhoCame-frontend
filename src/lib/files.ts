"use server";
/*
export async function getFile(filePath: string) {
    const bucketName = "files";

    const response = await fetch(
        `${process.env.FILE_SERVICE_URL}/api/Files?bucketName=${bucketName}&fileName=${filePath}`
    );
    const data = await response.json();

    const url = data.value;
    const fileData = await fetch(url);
    const buffer = Buffer.from(await fileData.arrayBuffer());
    const base64 = buffer.toString("base64");

    return base64;
}

export async function getFileBlob(filePath: string) {
    const bucketName = "files";

    const response = await fetch(
        `${process.env.FILE_SERVICE_URL}/api/Files?bucketName=${bucketName}&fileName=${filePath}`
    );
    const data = await response.json();

    const url = data.value;
    const fileData = await fetch(url);
    const blob = await fileData.blob();

    return blob;
}
*/