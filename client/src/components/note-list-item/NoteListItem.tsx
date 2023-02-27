import { PersonNote } from "../../types/PersonNote";

type NoteListItemProps = {
    note: PersonNote;
};

export default function NoteListItem({ note }: NoteListItemProps) {
    return (
        <li className="py-2 px-2 even:bg-gray-200">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {note.person.givenName} {note.person.familyName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{note.content}</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button
                        type="button"
                        className="border-2 border-violet-500 hover:bg-violet-200 text-gray-700 font-bold py-1 px-4 rounded"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </li>
    );
}
