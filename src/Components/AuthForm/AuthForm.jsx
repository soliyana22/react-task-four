import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./../../pages/SignUp/SignUp.css";

const AuthForm = ({ mode = "signup" }) => {
  const isSignUp = mode === "signup";

  return (
    <div className="signup-container">
      <div className="signup-content">
        {/* LEFT IMAGE */}
        <div className="image_content">
          <img
            src="./../../assets/images/E-commerce_img.jpg"
            alt="Auth Banner"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="text_content">
          <form className="signup-form">
            {/* ✅ Dynamic Heading */}
            <div className="form_text">
              <p className="first">
                {isSignUp ? "Create Account" : "Log in to Exclusive"}
              </p>
              <p className="second">
                {isSignUp
                  ? "Enter your details here"
                  : "Enter your credentials below"}
              </p>
            </div>

            {/* ✅ Input fields */}
            <div className="text-box">
              {/* Name field only for signup */}
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Name"
                  className="input-box"
                />
              )}

              <input
                type="text"
                placeholder="Email or Phone Number"
                className="input-box"
              />

              <input
                type="password"
                placeholder="Password"
                className="input-box"
              />

              {/* ✅ Buttons section */}
              <div className="buttons">
                {isSignUp ? (
                  <>
                    {/* Signup Mode: Create Account + Google */}
                    <button className="create_btn">Create Account</button>
                    <div className="signup-google">
                      <p>Sign Up with Google</p>
                      <FcGoogle size={24} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Login Mode: Button + Forgot Password on same line */}
                    <div className="login-actions">
                      <button className="login_btn">Log In</button>
                      <Link to="/" className="navigation-forget">
                        Forget Password?
                      </Link>
                    </div>
                  </>
                )}
              </div>

              {/* ✅ Bottom link changes */}
              <div className="login-link">
                {isSignUp ? (
                  <>
                    <p>Already have an account?</p>
                    <Link to="/login" className="navigation-login">
                      Log In
                    </Link>
                  </>
                ) : (
                  <>
                    {/* <p>Don’t have an account?</p>
                    <Link to="/signup" className="navigation-login">
                      Create Account
                    </Link> */}
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
