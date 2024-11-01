import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-[calc(100%-9rem)] mx-auto">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
