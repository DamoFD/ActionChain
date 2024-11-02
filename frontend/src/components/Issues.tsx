import { columns } from '@/config/issueColumns';
import Table from './Table';

const data = [
    {
        id: '1',
        action: 'Action 1',
        count: 3,
        firstSeen: '2022-01-01',
        lastSeen: '2022-01-01',
    },
    {
        id: '2',
        action: 'Action 2',
        count: 3,
        firstSeen: '2022-01-01',
        lastSeen: '2022-01-01',
    },
    {
        id: '3',
        action: 'Action 3',
        count: 3,
        firstSeen: '2022-01-01',
        lastSeen: '2022-01-01',
    },
]

const Issues = () => {

    return (
        <div className="mt-10 w-full">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800">Issues</h1>
            <p className="text-gray-500">Track failed runs grouped by action name, and mark them as resolved when fixed.</p>
            {/* /Header */}

            {/* Table */}
                <Table columns={columns} data={data} />
            {/* /Table */}

        </div>
    );
}

export default Issues;
