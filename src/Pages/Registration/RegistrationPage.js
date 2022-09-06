import { useContext, useState } from "react";
import Lottie from "react-lottie-player";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import animationData from "../../Animation/8XO1tZuygW.json";
import AppContext from "../../context";
import Button from "../../global-components/LinkButton/Button";
import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export default function RegistrationPage() {
    // Change Form
    const [isSignUpActive, setIsSignUpActive] = useState(false);;

    function displayOverlay(event) {
        event.target.id === "signUp" ? setIsSignUpActive(current => !current) : setIsSignUpActive(current => !current)
    }

    function transitionToSignUp() {
        if (firstName === "") {
            Swal.fire("Please Enter Your First Name");
            return;
        } else if (lastName === "") {
            Swal.fire("Please Enter Your Last Name");
            return;
        } else if (email === "") {
            Swal.fire("Please Enter Your Email");
            return;
        } else if (password === "") {
            Swal.fire("Please Enter Your Password");
            return;
        }
        setIsSignUpActive(current => !current)
    }

    // Login Section
    const navigate = useNavigate();
    const { setUser, setIsAuth, isAuth } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function handleLogin(e) {
        e.preventDefault();
        if (email === "") {
            Swal.fire("Please Enter Your Email");
            return;
        } else if (password === "") {
            Swal.fire("Please Enter Your Password");
            return;
        }
        const userInfo = {
            email,
            password,
        };

        const loggingIn = await fetch(
            "https://provident-life.herokuapp.com/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            }
        );
        setLoading(true);
        const result = await loggingIn.json();

        setTimeout(() => {
            if (result.token) {
                setLoading(false);
                const userToken = result.token;
                window.localStorage.setItem("token", userToken);
                window.localStorage.setItem("currUser", JSON.stringify(result.user));
                const currUser = window.localStorage.getItem("currUser");
                const parsedUser = JSON.parse(currUser);
                if (window.localStorage.getItem("token")) setIsAuth(true);
                setUser(parsedUser);
                setIsAuth(true);
            } else if (!result.token) {
                setLoading(false);
                Swal.fire("Wrong Credentials");
                setIsAuth(false);
                return;
            }
        }, 4000);
    }

    // Sign Up Section
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleFirstName(e) {
        setFirstName(e.target.value);
    };

    function handleLastName(e) {
        setLastName(e.target.value);
    };

    async function handleSignUp(e) {
        e.preventDefault();
        if (firstName === "") {
            Swal.fire("Please Enter Your First Name");
            return;
        } else if (lastName === "") {
            Swal.fire("Please Enter Your Last Name");
            return;
        } else if (email === "") {
            Swal.fire("Please Enter Your Email");
            return;
        } else if (password === "") {
            Swal.fire("Please Enter Your Password");
            return;
        }
        
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
                navigate('/login', { replace: true });
            }
        }, 4000);
    };



    return window.localStorage.getItem("token") ?
        (
            <Navigate to={"/"} />
        ) :
        (
            <>
                <LinkButton pathName="/" text="Home" />
                <div className="registration-body">
                    <div className={`reg-container ${isSignUpActive ? "right-panel-active" : ""}`} id="container">

                        <div className="form-container sign-up-container">
                            <form className="form" onSubmit={handleSignUp}>
                                <h1 className="h1 text-black LI-UI text-2xl">Create Account</h1>
                                <input type="text" placeholder="First Name" className="input" required=""
                                    value={firstName}
                                    onChange={handleFirstName} />
                                <input type="text" placeholder="Last Name" className="input" required=""
                                    value={lastName}
                                    onChange={handleLastName} />
                                <input type="email" placeholder="Email" className="input" required=""
                                    value={email}
                                    onChange={handleEmail} />
                                <input type="password" placeholder="Password" className="input" required=""
                                    value={password}
                                    onChange={handlePassword} />
                                <button className="button border-white hover:bg-[#D0CCF5] " type="submit" onClick={transitionToSignUp}>Sign Up</button>
                            </form>
                        </div>

                        <div className="form-container sign-in-container">
                            <form className="form" onSubmit={handleLogin}>
                                <h1 className="h1 text-black LI-UI text-2xl">Sign in</h1>
                                <input type="email" placeholder="Email" className="input" value={email}
                                    onChange={handleEmail} />
                                <input type="password" placeholder="Password" className="input" value={password}
                                    onChange={handlePassword} />
                                <button className="button border-white hover:bg-[#D0CCF5] " type="submit">Sign In</button>
                            </form>
                        </div>


                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left bg-[#655CC9]">
                                    <h1 className="h1 text-white LI-UI text-2xl">Welcome Back!</h1>
                                    <p className="p text-white LI-Mono text-2xl">To keep connected with us please login with your personal details</p>
                                    <button className="ghost button" id="signIn" onClick={displayOverlay}>Sign In</button>
                                </div>

                                <div className="overlay-panel overlay-right bg-[#655CC9]">
                                    <h1 className="h1 text-white LI-UI text-2xl">Hi There!</h1>
                                    <p className="p text-white LI-Mono text-2xl">Enter your personal details to open an account with us</p>
                                    <button className="ghost button" id="signUp" onClick={displayOverlay}>Sign Up</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col m-auto justify-center">
                        <div className="m-auto">
                            {loading && (
                                <Lottie
                                    loop
                                    animationData={animationData}
                                    play
                                    style={{ width: 80, height: 80 }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
}
