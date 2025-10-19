import React from "react";
import { Link } from "react-router-dom";

// const HeaderButton: React.FC = () => {
//     return (
//         <button className = "btn">
//             <Link to=link>link</Link>
//         </button>
//     );
// };

const Header: React.FC = () => {
    return (
        <header className = "my-header">
            <div>
                Cosmic Connection
            </div>
            <nav>
                <button className = "header-btn">
                    <Link to="/">Home</Link>
                </button>
                <button className = "header-btn">
                    <Link to="/Profile">Profile</Link>
                </button>
                <button className = "header-btn">
                    <Link to="/Login">Login</Link>
                </button>
            </nav>
        </header>
    );
};

export default Header;
