import { Import, LayoutTemplate, Plus } from 'lucide-react';
import Dropdown from './Dropdown';
import Folders from './Folders';
import Table from './Table';
import { columns } from '@/config/actionColumns';

interface Action {
    id: string
    name: string
    folder: string
    status: boolean
}

const data: Action[] = [
    {
        id: "1",
        name: "Action 1",
        folder: "Uncategorized",
        status: true
    },
    {
        id: "2",
        name: "Action 2",
        folder: "Uncategorized",
        status: true
    },
    {
        id: "3",
        name: "Action 3",
        folder: "Uncategorized",
        status: false
    },
]

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
    ];

    const folderItems = [
        {
            id: 1,
            label: 'All Actions',
            amount: 1,
        },
        {
            id: 2,
            label: 'Uncategorized',
            amount: 1,
        },
    ]

    return (
        <div className="mt-10 w-full">

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
            <div className="flex w-full space-x-8 mt-10">
                {/* Folders */}
                <Folders folders={folderItems} />
                {/* /Folders */}
                {/* Table */}
                <Table data={data} columns={columns} />
                {/* /Table */}
            </div>
            {/* /Content */}
        </div>
    );
}

export default Actions;
