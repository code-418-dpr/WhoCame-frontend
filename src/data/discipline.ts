"use server";

import { Discipline } from "@prisma/client";

import { db } from "@/lib/db";

export const getAllDisciplines = async (): Promise<Discipline[]> => {
    return db.discipline.findMany();
};

export const createDiscipline = async (id: string, name: string): Promise<Discipline> => {
    return db.discipline.create({ data: { id, name } });
};
