import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ImageSlider from "../Components/imageSlider";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Select, { MultiValue } from "react-select";

const RegisterVendor: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    password: "",
    confirmPassword: "",
    categories: [] as {value: string; label: string}[], // Change to array
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false)

  // Define categories for the dropdown
  const categories = [
    "Electronics",
    "Fashion",
    "Furniture",
    "Beauty & Personal Care",
    "Sports ",
    "Education",
    "Health & Wellness",
    "Home Decor",
    "Toys and Games",
    "Sports & Outdoors",
    "Automotive",
    "Music & Instruments",
    "Groceries and HouseHold Essentials",
    "Baby and Kids",
    "Pet Supplies",
    ];

  const categoryOptions = categories.map((categories) => ({
    value: categories,
    label: categories,
  }));

 

const handleCategoryChange = (
  selectedOptions: MultiValue<{ value: string; label: string }>
) => {
  setFormData({
    ...formData,
    categories: selectedOptions as {value: string; label: string}[],
  });
};

const category = formData.categories.map((category) => category.value);

const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
  
    if (name !== "category") {
      setFormData({ ...formData, [name]: value });
    }
  };
  
 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Vendor Name is required";
    if (!/^[a-zA-Z0-9\s]+$/.test(formData.name)) {
        newErrors.username =
          "Username should only contain letters, numbers, and spaces.";
      }
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (formData.categories.length === 0)
      newErrors.categories = "Please select at least one category";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        return;
    }
    console.log(formData);
    setIsLoading(true);

    try {
      const response = await axios.post("https://smart-shoper-backend.onrender.com", {
        ...formData,
        phonenumber: phoneNumber,
        categories: category,
      });

      if (response.status === 201) {
        console.log("Vendor Registration Successful", response.data);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/HomePage");
        }, 5000);
      } else {
        console.error("Registration Failed", response.data);
      }
    } catch (error:any) {
     console.error(
        "Registration Error: ",
        error.response?.data || error.message
      );
       setErrors({
        general:
          "An Error Occurred During Registration: " +
          (error.response?.data.message || error.message),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-indigo-600">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg  overflow-hidden max-w-5xl">
        <div className="flex flex-col justify-center p-8 bg-blue-600 text-white md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Register as a Vendor</h2>
          <p className="text-lg">
            Grow your business by joining our platform and reaching more
            customers.
          </p>
          <ImageSlider />
        </div>

        {/* Form Container */}
        <div className="flex flex-col justify-center p-8 md:w-1/2 ">
          <div className="overflow-y-scroll h-[650px]">
            <h2 className="text-3xl font-bold mb-4">Create Vendor Account</h2>
            <p className="pb-4">Enter Your Credentials To Create your Account</p>
            {errors.general && (
              <p className="text-red-500 mb-4">{errors.general}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Vendor Name */}
              <div className="relative mb-6">
                <label htmlFor="name" className="sr-only">
                  Vendor Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vendor Name eg John's Electronic Shop"
                    className="w-full p-3 pl-10 border-2 border-gray-800 rounded-md"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email */}
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
                    placeholder="Email eg john@gmail.com"
                    className="w-full p-3 pl-10 border-2 border-gray-800 rounded-md"
                  />
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5" />
                </div>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div className="relative mb-6">
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phonenumber",
                    id: "phonenumber",
                    className:
                      "w-full p-3 border-2 border-gray-800  pl-12 rounded-md focus:outline-none",
                  }}
                  country={"cm"}
                  enableSearch={true}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Phone Number eg +1 234 567 890"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Categories */}
              {/* Categories */}
              <div className="relative mb-6">
                <label htmlFor="category" className="sr-only">
                  Category
                </label>
                <Select
                  isMulti
                  name="category"
                  options={categoryOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={handleCategoryChange}
                  placeholder="Select categories that best describe your products"
                  value={formData.categories}
                />
                {errors.categories && (
                  <p className="text-red-500">{errors.categories}</p>
                )}
              </div>

              {/* Description */}
              <div className="relative mb-6">
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Vendor Description eg e.g., We specialize in high-quality electronics, offering a wide range of products including smartphones, laptops, and accessories"
                    className="w-full p-3 pl-10 border-2 border-gray-800 rounded-md "
                    rows={4} // Adjust number of rows as needed
                  />
                  <DocumentTextIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                </div>
                {errors.description && (
                  <p className="text-red-500">{errors.description}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-6">
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
                    placeholder="Enter a strong password (at least 8 characters, including uppercase, lowercase, number, and special character)"
                    className="w-full p-3 pl-10 border-2 border-gray-800 rounded-md"
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

              {/* Confirm Password */}
              <div className="relative mb-6">
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="w-full p-3 pl-10 border-2 border-gray-800 rounded-md"
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-900" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-900" />
                    )}
                  </div>
                  <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
              <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>
              {/* Submit Button */}
              <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
              disabled={isLoading}
            >
              {/**IS Loading Indicator */}
              {isLoading && (
                <div className="absolute inset-0  flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2  border-white" ></div>
                </div>
              )}
              <span className={isLoading ? "invisible" : ""}>
                Register
              </span>
            </button>
            </form>

            <div className="mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 bg-green-500  text-white text-center py-3 shadow-md">
          Registration Successfull !
        </div>
      )}
    </div>
  );
};

export default RegisterVendor;
