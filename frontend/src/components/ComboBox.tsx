import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

interface Project {
    value: string;
    label: string;
}

const ComboBox = ({ projects }: { projects: Project[] }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(projects[0]?.value ? projects[0].value : "");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    role="combobox"
                    className="w-[200px] justify-between flex items-center rounded-lg border border-gray-300 py-2 px-4 shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                    aria-expanded={open}
                >
                    {value
                        ? projects.find((project) => project.value === value)?.label
                        : "Select Project"}
                    <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search projects..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No projects found.</CommandEmpty>
                        <CommandGroup>
                            {projects.map((project) => (
                                <CommandItem
                                    key={project.value}
                                    value={project.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {project.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto size-4",
                                            value === project.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default ComboBox;
