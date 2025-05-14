import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signInCode, setSignInCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!emailOrPhone) {
      newErrors.emailOrPhone = "Email or Phone number is required";
    } else if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
      newErrors.emailOrPhone = "Enter a valid Email or Phone number";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Enter a valid password";
    }

    if (!signInCode) {
      newErrors.signInCode = "Sign-in code is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Clear form
      setEmailOrPhone("");
      setPassword("");
      setSignInCode("");
      setRememberMe(false);

      // Navigate to home
      navigate("/header");
    }
  };

  return (
    <div>
      <div className="overallform">
        <div className="form">
          <div className="head">
            <h1>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Email or Phone */}
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter your email or phone number"
            />
            {errors.emailOrPhone && <div className="error">{errors.emailOrPhone}</div>}

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && <div className="error">{errors.password}</div>}

            {/* Submit Button */}
            <button type="submit" className="clickme">Sign In</button>

            {/* OR Divider */}
            <div className="or-divider">OR</div>

            {/* Sign-In Code */}
            <input
              type="text"
              value={signInCode}
              onChange={(e) => setSignInCode(e.target.value)}
              placeholder="Use a sign-in code"
            />
            {errors.signInCode && <div className="error">{errors.signInCode}</div>}

            {/* Forgot Password Link */}
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            {/* Remember Me */}
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
            </div>

            {/* New to Netflix? Signup Now */}
            <h6 className="newtonetflix">New to Netflix? <a href="#">Sign Up Now</a></h6>

            {/* Google reCAPTCHA Disclaimer */}
            <p className="googlepara">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            <a href="#" className="googlea">Learn More</a>
          </form>
        </div>
      </div>
    </div>
  );
}
