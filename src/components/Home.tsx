import React from "react";
import Background from "./Background";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div>
        {/*<Background/>*/}
        <div className="home-container">
            <h1>Welcome to Cosmic Connection!</h1>
            <h2>Find your perfect match.</h2>
            <button className = "btn">
                <a href="/login">Get Started</a>
            </button>
            <p>Find your potential soul mates!!</p>
            <button className="btn">
                <Link to="/matching">Cosmic connection</Link>
            </button>
        </div>
        </div>
    );
};

export default Home;
