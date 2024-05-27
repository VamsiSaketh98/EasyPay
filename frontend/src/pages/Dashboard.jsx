import TopBar from "../components/Dashboard/Appbar"
import { Balance } from "../components/Balance"
import Sidebar from "../components/Dashboard/Sidebar"

export const Dashboard = () => {
    return <div className="bg-gradient-to-r from-blue-500 to-purple-500">
        <TopBar />
        <Sidebar />
        {/* <div className="m-8">
            <Balance value={"10,000"} />
            
        </div> */}
    </div>
}