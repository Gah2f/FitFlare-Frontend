import React, { useState } from "react";
import useAxiosFetch from '../../hooks/useAxiosFetch'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const axiosFetch = useAxiosFetch();
  const [formData, setFormData]= useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,  
  })
  
  const handleChange = (e) => {
    const {name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert("Password does not match");
      return;
    } 
    alert("Form submitted");

    try {
      const response = await axiosFetch.post('/newUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          email: formData.email,
          password: formData.password,
          role: 'user',
        })
      })
      // const data = response.json();
      if(!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
      
  }
  return (
    <div className="pt-32 pb-72  min-h-screen justify-center items-center flex  bg-blue-300 shadow-b-2xl">
      <div className="p-8 bg-white  rounded-2xl shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
      <form className=" space-y-4">
        <input  
        type="text" 
        name="FirstName"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        placeholder="First Name"
        value={formData.FirstName}
        onChange={handleChange}
        required />
        <input  
        type="text" 
        name="LastName"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        placeholder="Last Name"
        value={formData.LastName}
        onChange={handleChange}
        required />
        <input  
        type="email" 
        name="email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        placeholder="example @gmail.com"
        value={formData.email}
        onChange={handleChange}
        required />
        <div className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none space-x-35" >
        <input  
        type={showPassword ? "text" : "password"} 
        name="password"
        className="w-1/2 overflow-hidden outline-none"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required /> <span onClick={()=>setShowPassword(!showPassword)}> <VisibilityIcon className="text-gray-400 hover:text-blue-400 cursor-pointer"/> </span> 
        </div>
       
        <input  
        type="password" 
        name="confirmPassword"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        placeholder="ConfirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required />
        <div className="flex items-center space-x-2">
          <input 
          type="checkbox"
          name="agree"
          className="w-4 h-4"
          value={formData.agree}
          onChange={handleChange}
          required />
          <label 
          htmlFor=""
          className="text-gray-600">
            I agree to the terms and conditions.
          </label>
        </div>
        
        <button 
        className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition justify-center w-full mt-4"
        
        type="submit">
          Create Account
        </button>
        
        <p className="text-center text-gray-600 mt-4">
          Already have an account? 
          <Link to='/login'
          className="pl-2 text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
      </div>
    
    </div>
  );
}

export default SignUp;
