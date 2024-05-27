
import PaymentDashboard from './Newdashbord';

const Sidebar = () => (
  <div className="h-screen flex">
    <div className="bg-gray-800 w-64 flex flex-col justify-between">
      <div className="text-white text-xl font-bold p-4">Sidebar</div>
      <ul className="text-white">
        <li className="p-4">Home</li>
        <li className="p-4">Service and Support</li>
        <li className="p-4">Transfer</li>
        <li className="p-4">Invest</li>
        <li className="p-4">History</li>
        <li className="p-4">Reward Points</li>
        <li className="p-4">Settings</li>
        <li className="p-4">Your Profile</li>
        <li className="p-4">Logout</li>
      </ul>
    </div>
    <PaymentDashboard />
  </div>
);

export default Sidebar;