import React, { useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/media/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
  const {signUp, updateUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const axiosFetch = useAxiosFetch();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = async (e)=>{
    e.preventDefault();
    setError('');
    const fullName = `${formData.FirstName} ${formData.LastName}`

    try {
      const result = await signUp(formData.name, formData.password);
      const user = result.user;
      if (user) {
        updateUser(fullName, formData.photoURL);

        const userIMP = {
          name: fullName,
          email: user?.email,
          photo: user?.photoURL,
          gender: data?.gender,
          address: data?.address,
          role: 'user',
          phone: data?.phone,
        };
        await axios.post('http://localhost:3000/newUser', userIMP);
        navigate('/')
    }
   

    

    
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = async (e) => {
    
    setError('')
    
  };
  return (
    <div className="pt-32 pb-72  min-h-screen justify-center items-center flex  bg-blue-300 shadow-b-2xl">
      <div className="p-8 bg-white  rounded-2xl shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Sign Up
        </h2>
        <form onSubmit={onSubmit} className=" space-y-4">
          <input
            type="text"
            name="FirstName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="First Name"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="LastName"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Last Name"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="example @gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name=""
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter you Profile photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            required
          />

          <div className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none space-x-35">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-1/2 overflow-hidden outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />{" "}
            <span onClick={() => setShowPassword(!showPassword)}>
              {" "}
              <VisibilityIcon className="text-gray-400 hover:text-blue-400 cursor-pointer" />{" "}
            </span>
          </div>

          <input
            type="password"
            name="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="ConfirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              className="w-4 h-4"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="" className="text-gray-600">
              I agree to the terms and conditions.
            </label>
          </div>

          <button
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition justify-center w-full mt-4 cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
      {
         formData.password && formData.confirmPassword &&
        formData.password !== formData.confirmPassword && (
          <div>
            <p className="text-sm text-red-500 text-center">
              Password must match
            </p>
          </div>
        )
      }
          <div>
            <GoogleLogin />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?
            <Link to="/login" className="pl-2 text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
