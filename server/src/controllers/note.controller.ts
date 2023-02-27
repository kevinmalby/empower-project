import { Request, Response } from "express";
import { getNotes, getNote, createNote } from "../repositories/note.repository.js";
import { PersonNote } from "../types/PersonNote.js";

export const handleGetNotes = async (req: Request, res: Response): Promise<void> => {
    try {
        const notes = await getNotes();
        res.send(notes);
    } catch (e) {
        console.log(e); // TODO: Replace with logger
        res.status(500).send();
    }
};

export const handleGetNote = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(404).send("Invalid id provided for Note");
            return;
        }

        const note = await getNote(id);

        if (note == null) {
            res.status(404).send(`Could not find Note with id ${id}`);
        } else {
            res.send(note);
        }
    } catch (e) {
        console.log(e); // TODO: Replace with logger
        res.status(500).send();
    }
};

export const handleCreateNote = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(JSON.stringify(req.body));
        const noteToCreate: PersonNote = {
            content: req.body.content,
            givenName: req.body.person.givenName,
            familyName: req.body.person.familyName,
            email: req.body.person.email
        };

        const createdNote = await createNote(noteToCreate);
        res.send(createdNote);
    } catch (e) {
        console.log(e); // TODO: Replace with logger
        res.status(500).send();
    }
};
