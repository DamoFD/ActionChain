import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {

    return (
        <div className="flex">
            <Sidebar />
            <Header />
        </div>
    );
}

export default MainLayout;
