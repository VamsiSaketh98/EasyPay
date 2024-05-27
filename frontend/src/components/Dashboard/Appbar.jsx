

const TopBar = () => (
  <div className="bg-gray-800 text-white flex justify-between items-center p-4">
    <div className="flex items-center">
      <img src=".\src\components\Dashboard\logo.png" alt="Logo" className="h-8 w-8 mr-2" />
      <span className="font-bold text-xl">EasyPay</span>
    </div>
    <div className="flex items-center">
      <a href="#" className="mr-4 hover:text-gray-300">Home</a>
      <a href="#" className="mr-4 hover:text-gray-300">Transactions</a>
      <div className="relative">
        <button className="flex items-center focus:outline-none">
          <img src=".\src\components\Dashboard\logo.png" alt="Logo"  className="h-8 w-8 rounded-full"/>
          <span className="ml-2">User</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;

// className="h-8 w-8 rounded-full"