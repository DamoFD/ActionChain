import {
    CaretSortIcon,
    DotsHorizontalIcon,
} from '@radix-ui/react-icons';
import {
    ColumnDef,
} from '@tanstack/react-table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';

export const columns: ColumnDef<any>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                className="cursor-pointer"
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'action',
        header: ({ column }) => {
            return (
                <button
                    className="flex items-center"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Action
                    <CaretSortIcon className="ml-2 size-4" />
                </button>
            );
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue('action')}</div>,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue('status')}</div>
        ),
    },
    {
        accessorKey: 'startTime',
        header: 'Start Time',
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue('startTime')}</div>
        ),
    },
    {
        accessorKey: 'duration',
        header: 'Duration',
        cell: ({ row }) => (
            <div>{row.getValue('duration')}</div>
        ),
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const action = row.original;
            console.log(action);

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="size-8">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="size-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem>Move To</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Import</DropdownMenuItem>
                        <DropdownMenuItem>Export</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
]
