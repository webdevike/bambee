import Router from "next/router";
import { useState } from "react";
import { Button, Input } from "..";
import useUser from "../../hooks/use-user";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      if (email !== "user@test.com" || password !== "password") {
        setError("Invalid email or password")
        return;
      }
      fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then((data) => {
        localStorage.setItem("token", "a-very-real-token");
        Router.push('/')
      }).catch((err) => {
        setError(err.message);
      })
    } else {
      setError("Please enter an email and password");
    }
  };

  return (
    <div className="login-form max-w-6xl mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl mb-2 text-center">Login</h2>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(() => e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(() => e.target.value)}
        />
        <Button type="submit">Login</Button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default LoginForm;