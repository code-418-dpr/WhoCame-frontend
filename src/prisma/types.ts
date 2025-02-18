import { Prisma } from "@prisma/client";

export type RepresentationRequestWithRegion = Prisma.RepresentationRequestGetPayload<{
    include: {
        Region: true;
    };
}>;

export type RepresentationWithRegionAndUser = Prisma.RepresentationGetPayload<{
    include: {
        Region: {
            include: {
                FederalDistrict: true;
            };
        };
        User: true;
    };
}>;

export type EventWithResults = Prisma.EventGetPayload<{
    include: {
        ResultEvents: true;
        Representation: {
            include: {
                Region: true;
            };
        };
        DisciplinesOfEvents: {
            include: {
                Discipline: true;
            };
        };
        SportObject: true;
    };
}>;
