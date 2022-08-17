import { Link } from "react-router-dom";
import Button from "../../../global-components/LinkButton/Button";
import { InputTextForm } from "../../../global-components/LinkButton/InputTextForm";
import { LinkButton } from "../../../global-components/LinkButton/Link-Button";
import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UpdateRegistration from "../../../updatedLoginSignIn/UpdateRegistration";
import AppContext from "../../../context";
// import '../../../registration.css'

export default function SignUp() {
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  };

  function handleLastName(e) {
    setLastName(e.target.value);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  };

  async function handleSignUp(e) {
    e.preventDefault();
    const userInfo = {
      firstName,
      lastName,
      email,
      password
    };
    
    const signUpUser = await fetch('http://localhost:8000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const results = await signUpUser.json();
    navigate('/login', {replace : true});
  };

  return isAuth ? <Navigate to={'/'}/> : (
    <>
      <div className="bg-sunray-500 p-10">
        <LinkButton pathName="/" text="Home" />
        <h1 className="text-white font-bold text-center text-5xl">
          Get Started
        </h1>
        <h3 className="text-white font-bold text-center mt-4">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-black hover:text-[#FF99A8]">Log In</span>
          </Link>
        </h3>
        <form onSubmit={handleSignUp} className="flex justify-center pt-5">
          <div className="flex justify-center flex-col">
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="text"
                className="block py-2.5 px-0 w-96 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={firstName}
                onChange={handleFirstName}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="text"
                className="block py-2.5 px-0 w-96 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={lastName}
                onChange={handleLastName}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="email"
                className="block py-2.5 px-0 w-96 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={email}
                onChange={handleEmail}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="password"
                className="block py-2.5 px-0 w-96 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={password}
                onChange={handlePassword}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="flex justify-center">
              <Button type="submit" text="Sign Up" />
            </div>
          </div>
        </form>
        {/* <UpdateRegistration /> */}
      </div>
    </>
  );
}
