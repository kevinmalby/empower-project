import type { Note } from "@prisma/client";
import prisma from "../services/prisma.service.js";
import { PersonNote } from "../types/PersonNote.js";

export const getNote = async (id: number): Promise<Note | null> => {
    const note = await prisma.note.findUnique({
        where: {
            id: id
        },
        include: {
            person: true
        }
    });

    return note;
};

export const getNotes = async (): Promise<Note[]> => {
    const notes = await prisma.note.findMany({
        include: {
            person: true
        }
    });
    return notes;
};

export const createNote = async (note: PersonNote): Promise<Note> => {
    const createdNote = await prisma.note.create({
        data: {
            content: note.content,
            person: {
                create: {
                    givenName: note.givenName,
                    familyName: note.familyName,
                    email: note.email
                }
            }
        }
    });

    return createdNote;
};
