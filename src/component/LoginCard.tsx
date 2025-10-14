import AuthButton from "./AuthButton";
import { useState } from "react";

export default function LoginCard() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form>
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={(e) => handleChange(e)}
      />
      <AuthButton label="Login" />
      <AuthButton label="Create Account"/>
    </form>
  );
}
