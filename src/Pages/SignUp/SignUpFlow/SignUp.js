import { useContext, useState } from "react";
import Lottie from "react-lottie-player";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import animationData from "../../../Animation/8XO1tZuygW.json";
import AppContext from "../../../context";
import Button from "../../../global-components/LinkButton/Button";
import { LinkButton } from "../../../global-components/LinkButton/Link-Button";
// import '../../../registration.css'

export default function SignUp() {
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
    
    const signUpUser = await fetch('https://provident-life.herokuapp.com/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    // setLoading(true);
    const results = await signUpUser.json();

    setTimeout(() => {
      if (results.message === "user by this email already exists") {
        setLoading(false);
        Swal.fire(
         'This Email Is Already In Use'
        )
        return;
      } else {
        setLoading(false);
        navigate('/login', {replace : true});
      }
    }, 4000);
  };

  return isAuth ? <Navigate to={'/'}/> : (
    <>
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <LinkButton pathName="/" text="Home" />
        <h1 className="text-black font-bold text-center text-5xl">
          Get Started
        </h1>
        <h3 className="text-black font-bold text-center mt-4">
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
                className="block py-2.5 px-0 w-96 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required=""
                value={firstName}
                onChange={handleFirstName}
              />
              <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="text"
                className="block py-2.5 px-0 w-96 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required=""
                value={lastName}
                onChange={handleLastName}
              />
              <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="email"
                className="block py-2.5 px-0 w-96 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required=""
                value={email}
                onChange={handleEmail}
              />
              <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 mb-6 w-full group ">
              <input
                type="password"
                className="block py-2.5 px-0 w-96 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required=""
                value={password}
                onChange={handlePassword}
              />
              <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="flex flex-col m-auto justify-center">
              <div className="m-auto">{loading && <Lottie loop animationData={animationData} play style={{width: 80, height: 80}}/>}</div>
              <Button type="submit" text="Sign Up" />
            </div>
          </div>
        </form>
        {/* <UpdateRegistration /> */}
      </div>
    </>
  );
}
