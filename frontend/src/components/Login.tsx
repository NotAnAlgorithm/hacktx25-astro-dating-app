import React, { useState } from "react";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Logging in...");
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className = "btn" type="submit">Login</button>
                <button className = "btn">
                    <a href="/Register">Don't have an account? Register here!</a>
                </button>
            </form>
        </div>
    );
};

export default Login;
