import { columns } from '@/config/runColumns';
import Table from './Table';

const data = [
    {
        id: '1',
        action: 'Action 1',
        status: 'paused',
        startTime: '2022-01-01',
        duration: '29 milliseconds',
    },
    {
        id: '2',
        action: 'Action 2',
        status: 'paused',
        startTime: '2022-01-01',
        duration: '29 milliseconds',
    },
    {
        id: '3',
        action: 'Action 3',
        status: 'paused',
        startTime: '2022-01-01',
        duration: '29 milliseconds',
    },
]

const Runs = () => {

    return (
        <div className="mt-10 w-full">

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-800">Action Runs</h1>
            {/* /Header */}

            {/* Table */}
                <Table columns={columns} data={data} />
            {/* /Table */}

        </div>
    );
}

export default Runs;
