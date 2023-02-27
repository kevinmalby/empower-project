import axios from "axios";
import { PersonNote } from "../types/PersonNote";

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