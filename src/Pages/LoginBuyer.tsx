import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import googleicon from "../assets/googleicon.png";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid"; // Import icons from Heroicons

const LoginBuyer: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Object to store errors
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Clear any previous errors

    // Validation: Check for empty fields
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // If errors, update state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/loginBuyer",
        {
          ...formData,
        }
      );

      if (response.status === 200) {
        console.log("Login Successful: ", response.data);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/HomePage"); // Redirect to HomeScreen
        }, 3000); 

      } else {
        console.log("Login Failed: ", response.data);
        setErrors({
          general: response.data.message || "Login Failed. Please check your credentials and try again.",
        });
      }
    } catch (error: any) {
      console.error(
        "Login Error: ",
        error.response?.data || error.message
      );
      setErrors({
        general:
          "An Error Occurred During Login: " +
          (error.response?.data.message || error.message),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-indigo-600">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl">
        <div className="flex flex-col justify-center p-8 bg-blue-600 text-white md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Welcome Back to Smart Shopper</h2>
          <p className="text-lg">
            Log in to continue your seamless shopping experience.
          </p>
          <div className="mt-10 flex space-x-4">
            <div className="w-1/3">
              <img
                src="https://i.pinimg.com/564x/91/e0/a3/91e0a3483fefce18af07feb7c4e09ba8.jpg"
                alt="Electronics"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://i.pinimg.com/564x/a0/3c/25/a03c259a6eb254f23691414505ca72b2.jpg"
                alt="Fashion"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://i.pinimg.com/564x/e5/bd/ef/e5bdefe68d6c268695efac069decd31e.jpg"
                alt="Furniture"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Log In</h2>
          <p className="text-gray-600 mb-4">
            Enter your credentials to log in.
          </p>
          {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative mb-6">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border-2 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5" />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-3 border-2 border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-900" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-900" />
                  )}
                </div>
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
              disabled={isLoading}
            >
              {isLoading && (
                <div className="absolute inset-0  flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                </div>
              )}
              <span className={isLoading ? "invisible" : ""}>
                Log In
              </span>
            </button>
            <div className="flex items-center justify-between mt-4">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-gray-500 uppercase">or</p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <button className="w-full py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center">
              <img src={googleicon} alt="Google" className="w-6 h-6 mr-2" />
              Log In with Google
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-4">
            <Link to="/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-3 shadow-md">
          Login Successful!
        </div>
      )}
    </div>
  );
};

export default LoginBuyer;
