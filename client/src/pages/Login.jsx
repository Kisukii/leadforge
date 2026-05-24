import { useState } from "react";
import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        setLoggedIn(true);
        setError("");
      } else {
        setError("Invalid email or password");
      }

    } catch (err) {
      setError("Server error");
    }
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-10 rounded-2xl w-[400px] shadow-2xl">

        <h1 className="text-3xl font-bold mb-8 text-center">
          LeadForge Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#334155] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#334155] outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl"
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;