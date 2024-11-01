import { Plus, Folder } from "lucide-react";
import { useState } from "react";

interface Folder {
    id: number
    label: string
    amount: number
}

interface Props {
    folders: Folder[]
}

const Folders: React.FC<Props> = ({ folders }) => {

    const [activeFolder, setActiveFolder] = useState<number>(folders[0]?.id);

    return (
        <div className="w-56 mt-6">
            <div className="flex text-gray-800 items-center justify-between">
                <p>Folders</p>
                <button className="hover:bg-gray-100 p-1 rounded-lg">
                    <Plus className="size-6" />
                </button>
            </div>
            <div className="mt-4">
                {folders.map((folder, index) => (
                    <FolderItem setActiveFolder={setActiveFolder} active={activeFolder === folder.id} folder={folder} key={index} />
                ))}
            </div>
        </div>
    );
}

const FolderItem = ({ folder, active, setActiveFolder }: { folder: Folder, active: boolean, setActiveFolder: (id: number) => void }) => {

    return (
        <div
            className={`flex cursor-pointer justify-between items-center ${active ? 'bg-gray-100' : 'hover:bg-gray-100'} p-2 rounded-lg`}
            onClick={() => setActiveFolder(folder.id)}
        >
            <div className="flex items-center space-x-2">
                <Folder className="size-4 shrink-0" />
                <p>{folder.label}</p>
            </div>
            <p className="text-gray-600">{folder.amount}</p>
        </div>
    );
}

export default Folders;
