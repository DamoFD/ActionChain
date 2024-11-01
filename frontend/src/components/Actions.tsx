import { Import, LayoutTemplate, Plus } from "lucide-react";
import Dropdown from "./Dropdown";

const Actions = () => {

    const menuItems = [
        {
            label: 'From Scratch',
            icon: Plus
        },
        {
            label: 'Import Action',
            icon:  LayoutTemplate
        }
    ]

    return (
        <div className="mt-10">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Actions</h1>
                <div className="flex items-center space-x-4">
                    <button
                        className="justify-between text-gray-800 flex items-center rounded-lg border border-gray-300 py-2 px-4 shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                    >
                        <Import className="size-4 shrink-0" />
                        <p className="ml-2">Import Action</p>
                    </button>
                    <Dropdown menuItems={menuItems} text="New Action" />
                </div>
            </div>
            {/* /Header */}

            {/* Content */}
            <div>
                //
            </div>
            {/* /Content */}
        </div>
    );
}

export default Actions;
