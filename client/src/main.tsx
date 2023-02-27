import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error";
import Notes, { loader as notesLoader } from "./routes/notes";
import CreateNote, { action as createNoteAction } from "./routes/create-note";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "notes",
                element: <Notes />,
                loader: notesLoader
            },
            {
                path: "notes/new",
                element: <CreateNote />,
                action: createNoteAction
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
