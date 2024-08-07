import React, { useEffect, useState } from 'react';
import authService from '../appwrite/auth';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const account = await authService.getCurrentUser();
            setUser(account);
        }
        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full max-w-md mx-auto bg-customPink shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="mb-4">
                <p className="text-gray-600 ">Name:</p>
                <p className="text-lg">{user.name}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-600">Email:</p>
                <p className="text-lg">{user.email}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-600">Registration Date:</p>
                <p className="text-lg">{new Date(user.registration).toLocaleDateString()}</p>
            </div>
            {/* Add more fields as necessary */}
        </div>
    );
}

export default Profile;
