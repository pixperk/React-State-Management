import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();//extracting data from route

  return (
    <div className="mt-7 mb-7 bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome back, {userid}!</h2>
      <p className="text-lg text-gray-700 mb-4">Here's your personalized content.</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Add personalized content here */}
      </div>
    </div>
  );
}

export default User;
