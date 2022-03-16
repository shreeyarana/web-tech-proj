import "./Signup.css";
//import loginAvatar from "./bg2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


import axios from "axios";

function SignUp() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, phone, username, password, repassword } = user;
    if (name && phone && username && password && (password == repassword)) {
      axios.post("http://localhost:8000/SignUp", user).then((res) => {
        console.log("Sent!!")
        swal(res.data.message);
        history("/");
      }).catch(
        (error) => {
          swal("User already Exists!");



        });}
    else {
      swal("Invalid Input");
    }
  };

  return (
    <div className="loginPage">
      <div className="loginbox">

        <h1>Sign Up</h1>
        <form action="server.js">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <p>Mobile Number</p>
          <input
            type="text"
            name="phone"
            value={user.phone}
            placeholder="Enter Mobile Number"
            onChange={handleChange}
          />
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <p>Confirm Password</p>
          <input
            type="password"
            name="repassword"
            value={user.repassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
          <input
            type="button"
            name="signup"
            value="Sign-Up"
            onClick={register}
          />
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUp;