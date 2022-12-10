import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: await JSON.stringify({
        name,
        password,
      }),
    });

    const data = await req.json();

    if (data.status === "ok") {
        // save the token in the local storage, to use it after we are redirected to the dashboard
        localStorage.setItem("token", data.token);
        // type localstorage in console after the successful login to see the token that is
        // generated and navigate to jwt.io to check if the token is valid
        /* 
        Inside here we can check for the rank of the user and navigate him to the correct dashboard
        (admin dashboard, manager dashboard, employee dashboard)
        we can do that like: navigate("/managerDashboard"); for example (37:00)
        */
      console.log("success");
      navigate("/*") // right now it navigates to the main page after a successful login
    } else {
      alert("error");
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Login;