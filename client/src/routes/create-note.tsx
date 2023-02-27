import { Form, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/form-input/FormInput";
import { createNote } from "../services/note.service";

export async function action({ request }: any) {
    const formData = await request.formData();

    await createNote({
        content: formData.get("content"),
        person: {
            givenName: formData.get("givenName"),
            familyName: formData.get("familyName"),
            email: formData.get("email")
        }
    });

    return redirect("/notes");
}

export default function CreateNote() {
    const navigate = useNavigate();

    const cancel = () => {
        // TODO: Prompt the user about lost changes
        navigate(-1);
    };

    return (
        <div className="flex flex-col pt-10 w-full">
            <h1 className="text-2xl font-bold">Enter Note Details</h1>
            <Form method="post" className="mt-10">
                <FormInput id="givenName" labelText="Given Name" type="text" />
                <FormInput id="familyName" labelText="Family Name" type="text" />
                <FormInput id="email" labelText="Email" type="email" placeholder="your.email@example.com" />
                <FormInput id="content" labelText="Note" type="textarea" placeholder="Enter your note content here" />
                <div className="flex gap-5">
                    <button
                        type="button"
                        className="hover:bg-gray-300 border-2 border-gray-700 text-gray-700 font-bold py-2 px-4 rounded"
                        onClick={cancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Create
                    </button>
                </div>
            </Form>
        </div>
    );
}
