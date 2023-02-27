import axios from "axios";
import { Note } from "../types/Note";
import { Person } from "../types/Person";
import { PersonNote } from "../types/PersonNote";

type NewPersonNote = Pick<PersonNote, "content"> & {person: Omit<Person, "id">}

export const getNotes = async (): Promise<PersonNote[]> => {
    try {
        const notesResponse = await axios.get<PersonNote[]>('http://localhost:3000/notes');
        if(notesResponse.status !== 200) {
            console.error(notesResponse.statusText);
        }

        return notesResponse.data;
    } catch(e) {
        console.error(e);
        return [];
    }
};

export const createNote = async (note: NewPersonNote): Promise<PersonNote|null> => {
    try {
        const notesResponse = await axios.post<PersonNote>('http://localhost:3000/notes', note);
        if(notesResponse.status !== 200) {
            console.error(notesResponse.statusText);
        }

        return notesResponse.data;
    } catch(e) {
        console.error(e);
        return null;
    }
};