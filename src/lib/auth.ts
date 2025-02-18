/*
import { auth } from "@/security/auth";
import { UserRole } from "@prisma/client";

export const currentUser = async () => {
    const session = await auth();

    return session?.user;
};

export const currentRole = async (): Promise<UserRole | undefined> => {
    const session = await auth();

    return session?.user?.role;
};
 */
