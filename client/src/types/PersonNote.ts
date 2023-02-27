import { Note } from "./Note";
import { Person } from "./Person";

export type PersonNote = Note & { person: Person };