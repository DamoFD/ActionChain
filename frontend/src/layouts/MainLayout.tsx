import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Actions from "../components/Actions";

const MainLayout = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-[calc(100%-9rem)] mx-auto">
                <Header />
                <Actions />
            </div>
        </div>
    );
}

export default MainLayout;
