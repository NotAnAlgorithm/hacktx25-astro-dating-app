import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to MatchUp!</h1>
            <p>Find your perfect match.</p>
            <button>
                <a href="/login">Get Started</a>
            </button>
        </div>
    );
};

export default Home;
