import React from "react";

const Profile: React.FC = () => {
    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <img src="https://via.placeholder.com/150" alt="Profile" />
                <h2>John Doe</h2>
                <p>Age: 28</p>
                <p>Location: New York</p>
                <p>Bio: Lover of hiking and coffee!</p>
            </div>
        </div>
    );
};

export default Profile;
