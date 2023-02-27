import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import NoteListItem from "../components/note-list-item/NoteListItem";
import { getNotes } from "../services/note.service";
import { PersonNote } from "../types/PersonNote";

export async function loader() {
    const notes = await getNotes();
    return notes;
}

export default function Notes() {
    const notes = useLoaderData() as PersonNote[];
    return (
        <div className="p-10 mx-auto w-full">
            <div>
                <Link
                    to="/notes/new"
                    className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                >
                    New Note
                </Link>
            </div>
            <h1 className="mt-8 text-2xl font-bold">Canvassing Notes</h1>
            <ul className="mt-3 border border-gray-400 w-full max-h-[70vh] overflow-auto">
                {notes.map((note) => (
                    <NoteListItem note={note} />
                ))}
            </ul>
        </div>
    );
}
