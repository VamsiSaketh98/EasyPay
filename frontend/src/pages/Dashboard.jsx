import TopBar from "../components/Appbar"
import { Balance } from "../components/Balance"
import Sidebar from "../components/Sidebar"

export const Dashboard = () => {
    return <div>
        <TopBar />
        <Sidebar />
        <div className="m-8">
            <Balance value={"10,000"} />
            
        </div>
    </div>
}