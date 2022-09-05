import { useState } from "react";

export default function RegistrationPage() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [isSignInActive, setIsSignInActive] = useState(true);

    function displayOverlay(event) {
        const currentlyActive = event.target.id;
        if (currentlyActive === "signUp") {
            setIsSignUpActive(current => !current)
            setIsSignInActive(current => !current)
        }

        if (currentlyActive === "signIn") {
            setIsSignUpActive(current => !current)
            setIsSignInActive(current => !current)
        }
    }

    return (
        <div className="registration-body">

            <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container">

                <div className="form-container sign-up-container">
                    <form className="form">
                        <h1 className="h1">Create Account</h1>
                        <input type="text" placeholder="Name" className="input" />
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <button className="button">Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form className="form">
                        <h1 className="h1">Sign in</h1>
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <button className="button">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="h1">Welcome Back!</h1>
                            <p className="p">To keep connected with us please login with your personal details</p>
                            <button className="ghost button" id="signIn" onClick={displayOverlay}>Sign In</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1 className="h1">Hi There!</h1>
                            <p className="p">Enter your personal details to open an account with us</p>
                            <button className="ghost button" id="signUp" onClick={displayOverlay}>Sign Up</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
