import ActiveChainLogo from '../assets/activechain-logo.webp';
import { FlowIcon, ListIcon, IssueIcon, PlugIcon, SettingsIcon, HelpIcon, DocumentIcon } from '../icons/Icons';

const Sidebar = () => {

    const menuItems = [
        { name: 'Actions', icon: FlowIcon },
        { name: 'Runs', icon: ListIcon },
        { name: 'Issues', icon: IssueIcon },
        { name: 'Plugins', icon: PlugIcon },
        { name: 'Settings', icon: SettingsIcon },
    ];

    const helpItems = [
        { name: 'Help', icon: HelpIcon },
        { name: 'Docs', icon: DocumentIcon },
    ]

    return (
        <div className="w-20 bg-gray-200 min-h-screen border-r border-gray-400 flex flex-col items-center justify-between">
            <img src={ActiveChainLogo} alt="ActiveChain" className="size-16 p-2 cursor-pointer" />
            <div className="flex flex-col space-y-4 items-center p-2">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center cursor-pointer group">
                        <div className="p-2 rounded-lg">
                            <item.icon className="size-6 text-gray-800 group-hover:text-red-600 transition-colors duration-200 ease-in-out" />
                        </div>
                        <p className="text-sm text-gray-800">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-4 items-center p-2">
                {helpItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center cursor-pointer group">
                        <div className="p-2 rounded-lg">
                            <item.icon className="size-6 text-gray-800 group-hover:text-red-600 transition-colors duration-200 ease-in-out" />
                        </div>
                        <p className="text-sm text-gray-800">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
