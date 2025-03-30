import React, { useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../../components/media/GoogleLogin";
import useAuth from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const axiosFetch = useAxiosFetch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {loginUser, error, setError, loading, setLoading} = useAuth();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    // console.log(formData);
    loginUser(formData.email, formData.password).then(()=>{
    navigate('/');
    }).catch((err)=>{
      setError(err.code);
      setLoading(false);
    })
    };
  return (
    <div className="pt-32 pb-72  min-h-screen justify-center items-center flex  bg-blue-300 shadow-b-2xl">
      <div className="p-8 bg-white  rounded-2xl shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Get Started today
        </h2>
         <p className="text-center text-gray-600 mt-2 mb-2">
         Take the first step toward your goals with ease. <br /> Join now and unlock endless possibilities!
         </p>
        <form onSubmit={handleSubmit} className=" space-y-4">
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="example @gmail.com"
            value={formData.email}
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

          <button
            className={`p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition justify-center w-full mt-4 ${loading? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            type="submit"
            disabled={loading}          >
           {loading? "Logging in..." : "Login"} 
          </button>

          <p className="text-center text-gray-600 mt-4">
            No account yet?
            <Link to="/signup" className="pl-2 text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>

        <div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
