import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface menuItem {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Props {
    text: string;
    menuItems: menuItem[];
}

const Dropdown: React.FC<Props> = ({ text, menuItems }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button
                    className="justify-between text-white flex items-center rounded-lg py-2 px-4 shadow-md hover:bg-red-600 transition-colors duration-200 ease-in-out bg-red-500 space-x-2"
                >
                    <p className="ml-2">{text}</p>
                    <ChevronDown className="size-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                {menuItems.map((item, index) => (
                    <DropdownMenuItem key={index}>
                        <item.icon className="size-4 shrink-0" />
                        <p>{item.label}</p>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Dropdown;
