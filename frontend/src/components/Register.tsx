import React, { useState } from "react";

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Logging in...");
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister}>
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
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Register;
