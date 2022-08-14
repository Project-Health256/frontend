import { useState } from "react";
export default function UpdateRegistration() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [isSignInActive, setIsSignInActive] = useState(true);
    
    function displayOverlay(event) {
        const currentlyActive = event.target.id;
        if (currentlyActive === "signUp" ) {
            setIsSignUpActive(current => !current)
            setIsSignInActive(current => !current)
        }

        if (currentlyActive === "signIn" ) {
            setIsSignUpActive(current => !current)
            setIsSignInActive(current => !current)
        }
    }

    return (
        <div class={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container">
            <div class="form-container sign-up-container">
                <form>
                    <h1 className="font-bold m-0">Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form>
                    <h1 className="font-bold m-0">Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#?">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1 className="font-bold m-0">Welcome Back!</h1>
                        <p className="text-[14px] font-thin leading-5 m-[20px 0 30px]">Lorem Ipsum</p>
                        <button class="ghost" id="signIn" onClick={displayOverlay}>Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1 className="font-bold m-0">Hi There!</h1>
                        <p className="text-[14px] font-thin leading-5 m-[20px 0 30px]">Lorem Ipsum</p>
                        <button class="ghost" id="signUp" onClick={displayOverlay}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
