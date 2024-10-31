import { PlusIcon, ShieldIcon } from "lucide-react";
import Avatar from "./Avatar";
import ComboBox from "./ComboBox";

const Header = () => {

    const projects = [
        {
            value: 'project-1',
            label: 'Project 1',
        },
        {
            value: 'project-2',
            label: 'Project 2',
        },
        {
            value: 'project-3',
            label: 'Project 3',
        },
    ];

    return (
        <div className="w-[calc(100%-9rem)] mx-auto h-16 border-b border-gray-300 flex items-center justify-between">
            <ComboBox projects={projects} />
            <div className="flex items-center space-x-4">
                <button
                    className="justify-between text-gray-800 flex items-center rounded-lg border border-gray-300 py-2 px-4 shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                    <PlusIcon className="size-4 shrink-0" />
                    <p className="ml-2">Invite User</p>
                </button>
                <button
                    className="justify-between text-gray-800 flex items-center rounded-lg border border-gray-300 py-2 px-4 shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                    <ShieldIcon className="size-4 shrink-0" />
                    <p className="ml-2">Platform Admin</p>
                </button>
                <button
                    className="justify-between text-gray-800 flex items-center rounded-lg border border-gray-300 py-2 px-4 shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                    <ShieldIcon className="size-4 shrink-0" />
                    <p className="ml-2">View Usage</p>
                </button>
                <Avatar src="https://github.com/shadcn.png" alt="Shadcn" fallback="CN" />
            </div>
        </div>
    );
}

export default Header;
