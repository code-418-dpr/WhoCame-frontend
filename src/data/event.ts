"use server";

import { createSportObject } from "@/data/sportObject";
import { EventLevel, Status } from "@prisma/client";
// import {ResultEvents} from "@prisma/client";

import { db } from "@/lib/db";
import {
    sendEventAcceptedNotification,
    sendEventDeclinedNotification,
    sendNewEventRequestNotification,
} from "@/lib/notifications";

export const createEventRequest = async (
    title: string,
    ageRange: string,
    start: Date,
    end: Date,
    isOnline: boolean,
    level: EventLevel,
    participantsCount: number,
    representationId: string | null = null,
    sportObjectData: { name: string; address: string } | null = null,
    disciplinesIds: string[]
) => {
    let sportObjectsId = null;
    if (sportObjectData) {
        const sportObject = await createSportObject(sportObjectData.name, sportObjectData.address);
        sportObjectsId = sportObject?.id;
    }
    const event = await db.event.create({
        data: {
            title,
            ageRange,
            start,
            end,
            isOnline,
            level,
            participantsCount,
            representationId,
            sportObjectsId,
            status: Status.PENDING,
        },
    });
    // Дожидаемся завершения всех операций создания дисциплин
    await Promise.all(
        disciplinesIds.map(
            async (id) =>
                await db.disciplinesOfEvents.create({ data: { disciplineId: id, eventId: event.id } })
)
);
    await sendNewEventRequestNotification(event.title);
};
export const getAndFilterEventsForAll = async (
    level: EventLevel | undefined = undefined,
    federalDistrictId: string | undefined = undefined,
    regionId: string | null | undefined = undefined
) => {
    return db.event.findMany({
        include: {
            Representation: {
                include: {
                    User: true,
                    Region: {
                        include: {
                            FederalDistrict: true,
                        },
                    },
                },
            },
            SportObject: true,
            DisciplinesOfEvents: {
                include: {
                    Discipline: true,
                },
            },
        },
        where: {
            level,
            ...(regionId === null
                ? { Representation: null } // Только события без Representation
                : regionId !== undefined
                  ? {
                        Representation: {
                            Region: {
                                id: regionId,
                                FederalDistrict: {
                                    id: federalDistrictId,
                                },
                            },
                        },
                    }
                  : {}), // Если regionId === undefined, не фильтровать по Representation
        },
    });
};
export const getAndFilterEventsForMonth = async (
    year: number,
    month: number,
    level: EventLevel | undefined = undefined,
    federalDistrictId: string | undefined = undefined,
    regionId: string | null | undefined = undefined
) => {
    const monthStartDate = new Date(year, month - 1, 1);
    const monthEndDate = new Date(year, month, 1);

    return db.event.findMany({
        include: {
            Representation: {
                include: {
                    User: true,
                    Region: {
                        include: {
                            FederalDistrict: true,
                        },
                    },
                },
            },
            SportObject: true,
            DisciplinesOfEvents: {
                include: {
                    Discipline: true,
                },
            },
        },
        where: {
            start: {
                gte: monthStartDate,
                lt: monthEndDate,
            },
            level,
            ...(regionId === null
                ? { Representation: null } // Только события без Representation
                : regionId !== undefined
                  ? {
                        Representation: {
                            Region: {
                                id: regionId,
                                FederalDistrict: {
                                    id: federalDistrictId,
                                },
                            },
                        },
                    }
                  : {}), // Если regionId === undefined, не фильтровать по Representation
        },
    });
};

export const getPendingEvents = async () => {
    return db.event.findMany({
        where: {
            status: Status.PENDING,
        },
        include: {
            ResultEvents: true,
            Representation: {
                include: {
                    Region: true,
                },
            },
            DisciplinesOfEvents: {
                include: {
                    Discipline: true,
                },
            },
            SportObject: true,
        },
    });
};

export const getEventsFromUser = async (userId: string) => {
    const results = await db.event.findMany({
        where: {
            Representation: {
                userId,
            },
        },
        include: {
            ResultEvents: true,
            Representation: {
                include: {
                    Region: true,
                },
            },
            DisciplinesOfEvents: {
                include: {
                    Discipline: true,
                },
            },
            SportObject: true,
        },
    });
    return results;
};
export const getAllEventsFromUser = async (userId: string) => {
    return db.event.findMany({
        where: {
            Representation: {
                userId, // Условие фильтрации по userId
            },
        },
        include: {
            Representation: {
                include: {
                    Region: true,
                },
            },
        },
    });
};

export const declineEventRequest = async (id: string, refusalReason: string) => {
    const event = await db.event.findUnique({
        where: { id },
        include: {
            Representation: {
                include: {
                    User: true,
                },
            },
        },
    });
    if (!event?.Representation?.User) {
        throw new Error("Пользователь не найден");
    }

    await sendEventDeclinedNotification(event.Representation.User, event.title, refusalReason);

    return db.event.update({
        where: { id },
        data: { status: Status.REFUSED },
    });
};

export const acceptEventRequest = async (id: string) => {
    const event = await db.event.findUnique({
        where: { id },
        include: {
            Representation: {
                include: {
                    User: true,
                },
            },
        },
    });
    if (!event?.Representation?.User) {
        throw new Error("Пользователь не найден");
    }

    await sendEventAcceptedNotification(event.Representation.User, event.title);

    return db.event.update({
        where: { id },
        data: { status: Status.APPROVED },
    });
};
