import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="flex flex-col h-full">
            <header className="h-12 flex bg-violet-400">
                <h1 className="text-2xl text-white font-bold self-center">Canvassing App</h1>
            </header>
            <div className="flex grow px-96">
                <Outlet />
            </div>
            <footer className="h-8 flex">
                <p>Interview Project by Kevin Malby</p>
            </footer>
        </div>
    );
}
