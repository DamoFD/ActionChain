import ActiveChainLogo from '../assets/activechain-logo.webp';
import { FlowIcon, ListIcon, IssueIcon, PlugIcon, SettingsIcon, HelpIcon, DocumentIcon } from '../icons/Icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const menuItems = [
        { name: 'Actions', icon: FlowIcon, path: '/' },
        { name: 'Runs', icon: ListIcon, path: '/runs' },
        { name: 'Issues', icon: IssueIcon, path: '/issues' },
        { name: 'Plugins', icon: PlugIcon, path: '/plugins' },
        { name: 'Settings', icon: SettingsIcon, path: '/settings' },
    ];

    const helpItems = [
        { name: 'Help', icon: HelpIcon },
        { name: 'Docs', icon: DocumentIcon },
    ]

    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="w-20 bg-gray-200 min-h-screen border-r border-gray-400 flex flex-col items-center justify-between">
            <img src={ActiveChainLogo} alt="ActiveChain" className="size-16 p-2 cursor-pointer" />
            <div className="flex flex-col space-y-4 items-center p-2">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className="flex flex-col items-center cursor-pointer group">
                        <div className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-gray-300 text-red-600' : 'text-gray-800'}`}>
                            <item.icon className="size-6 group-hover:text-red-600 transition-colors duration-200 ease-in-out" />
                        </div>
                        <p className="text-sm text-gray-800">{item.name}</p>
                    </Link>
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
