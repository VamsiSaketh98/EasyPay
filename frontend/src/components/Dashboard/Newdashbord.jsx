import React from 'react';

const PaymentDashboard = () => {
  return (
    <div className="flex flex-col items-center  h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-2xl font-bold mb-4">Balance</h2>
          <p className="text-3xl font-bold text-green-500">₹ 50,000</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Transfer</h2>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg mb-4"
              placeholder="Enter amount"
            />
            <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg">
              Transfer
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Transaction History</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Payment to Elon Musk</span>
                <span>₹500</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Payment to Will Smith</span>
                <span>₹300</span>
              </li>
              <li className="flex justify-between">
                <span>Payment to Alex Johnson</span>
                <span>₹700</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboard;