// src/components/UserProfile.js
import React from 'react';

// UserProfile component displaying user's profile information
const UserProfile = () => {
  // Sample user data
  const user = {
    name: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    address: '456 MG Road, Bangalore, Karnataka, 560001',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image URL
    phoneNumber: '+91 98765 43210',
    dob: '01 January 1990',
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Profile</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
          <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow-md"
            />
          </div>
          <div className="md:w-3/4 md:ml-6">
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <p className="text-lg text-gray-900">{user.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <p className="text-lg text-gray-900">{user.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Address</label>
              <p className="text-lg text-gray-900">{user.address}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Phone Number</label>
              <p className="text-lg text-gray-900">{user.phoneNumber}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Date of Birth</label>
              <p className="text-lg text-gray-900">{user.dob}</p>
            </div>
            <div className="flex mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Edit Profile
              </button>
              <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
