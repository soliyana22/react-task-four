import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./../../pages/SignUp/SignUp.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebase";

const AuthForm = ({ mode = "signup" }) => {
  const isSignUp = mode === "signup";
  const navigate = useNavigate();

  // ✅ Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Error States
  const [errors, setErrors] = useState({});

  // ✅ Validators
  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name); // letters + spaces only
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 6;

  // ✅ Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // ✅ Validate only in Signup mode
    if (isSignUp) {
      if (!name.trim()) {
        newErrors.name = "Name is required";
      } else if (!isValidName(name.trim())) {
        newErrors.name = "Name can only contain letters and spaces";
      }
    }

    // ✅ Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    // ✅ Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // ✅ If any errors → show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ No validation errors → proceed
    setErrors({});
    console.log("Form submitted:", { name, email, password });

    if (isSignUp) {
      // ✅ SIGNUP WITH FIREBASE
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful! Redirecting to login...");
        navigate("/login"); // Redirect after signup
      } catch (err) {
        console.error(err);
        alert("Signup failed: " + err.message);
      }
    } else {
      // ✅ LOGIN MODE
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful! Redirecting to Home...");
        navigate("/home"); // ✅ Redirect to Home page after login
      } catch (err) {
        console.error(err);
        alert("Login failed: " + err.message);
      }
    }
  };

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
          <form className="signup-form" onSubmit={handleSubmit}>
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
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-box"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </>
              )}

              {/* Email */}
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="input-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}

              {/* ✅ Buttons section */}
              <div className="buttons">
                {isSignUp ? (
                  <>
                    {/* Signup Mode: Create Account + Google */}
                    <button className="create_btn" type="submit">
                      Create Account
                    </button>
                    <div className="signup-google">
                      <p>Sign Up with Google</p>
                      <FcGoogle size={24} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Login Mode: Button + Forgot Password on same line */}
                    <div className="login-actions">
                      <button className="login_btn" type="submit">
                        Log In
                      </button>
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
                    <p>Don’t have an account?</p>
                    <Link to="/signup" className="navigation-login">
                      Create Account
                    </Link>
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
