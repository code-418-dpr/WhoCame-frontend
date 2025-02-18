"use server";

import { RepresentationRequestWithRegion } from "@/prisma/types";
import { RepresentationRequest, Status } from "@prisma/client";

import { db } from "@/lib/db";
import {
    sendNewRepresentationRequestNotification,
    sendRepresentationAcceptedNotification,
    sendRepresentationDeclinedNotification,
} from "@/lib/notifications";

export const applyRepresentationRequest = async (
    regionId: string,
    name: string,
    email: string
): Promise<RepresentationRequest> => {
    await sendNewRepresentationRequestNotification(name);

    return db.representationRequest.create({
        data: { regionId, name, email, status: Status.PENDING },
    });
};

export const adminChangeRepresentationRequestStatus = async (
    representationRequestId: string,
    approve: boolean,
    refusalReason: string | undefined = undefined
) => {
    const representationRequest = await db.representationRequest.findUnique({
        where: { id: representationRequestId },
    });

    if (!representationRequest) {
        throw new Error("Заявка не найдена");
    }

    if (refusalReason) {
        await sendRepresentationDeclinedNotification(representationRequest.email, refusalReason);
    } else {
        await sendRepresentationAcceptedNotification(
            representationRequest.email,
            `${process.env.PUBLIC_WEB_URL}/set-password/${representationRequestId}`
        );
    }

    return db.representationRequest.update({
        where: { id: representationRequestId },
        data: {
            status: approve ? Status.APPROVED : Status.REFUSED,
            refusalReason,
        },
    });
};

export const getAllRepresentationRequests = async (): Promise<
    RepresentationRequestWithRegion[]
> => {
    return db.representationRequest.findMany({
        include: { Region: true },
    });
};
