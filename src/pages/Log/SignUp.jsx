import React, { useRef, useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/media/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const { signUp, updateUser, setError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const axiosFetch = useAxiosFetch();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    gender: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fitflare-avatar");

    try {
      const response = await axios.post("fitflare-avatar", formData);
      return response.data.secure_url;
    } catch (error) {
      console.log("Error uploading image", error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("Password doesn't match");
        return;
      }
      if (!data.agree) {
        setError("You must agree to the terms and conditions");
        return;
      }
      let imageUrl = "";
      if (profileImage) {
        imageUrl = await uploadImage(profileImage);
        if (!imageUrl) {
          setError("Failed to upload profile image");
          return;
        }
      }
      setError("");
      const userCredential = await signUp(data.email, data.password);
      const user = userCredential.user;

      await updateUser(`${data.FirstName} ${data.LastName}`, data.photo);

      const userData = {
        name: `${data.FirstName} ${data.LastName}`,
        email: user.email,
        photo: data.photo,
        gender: data.gender,
        role: data.role,
      };

      await axios.post("http://localhost:3000/newUser", userData);

      setError("");
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="pt-32 pb-72  min-h-screen justify-center items-center flex  bg-blue-300 shadow-b-2xl">
      <div className="p-8 bg-white  rounded-2xl shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Sign Up
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
          className=" space-y-4 "
        >
          <div className="grid sm:grid-rows-1 md:grid-cols-2 justify-between gap-4 ">
            <div className="space-y-2">
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
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full appearance-none  p-3 border-2 border-gray-300 focus:border-blue-500 overflow-hidden outline-none rounded-md"
              >
                <option value="" className="text-md text-gray-500" disabled>
                  {" "}
                  Role{" "}
                </option>
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>

            <div className="space-y-2">
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full appearance-none  p-3 border-2 border-gray-300 focus:border-blue-500 overflow-hidden outline-none rounded-md"
                required
              >
                <option value="" className="text-md text-gray-500" disabled>
                  {" "}
                  Gender{" "}
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
         
              <div className="space-y-2">
               
                <div className="flex items-center gap-4 p-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    Upload Image
                  </button>
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                </div>
                
              </div>

              <div className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none space-x-15 flex">
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
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              className="w-4 h-4"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="" className="text-gray-600 text-center">
              I agree to the terms and conditions.
            </label>
          </div>

          <button
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition justify-center w-full mt-4 cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
          {formData.password &&
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword && (
              <div>
                <p className="text-sm text-red-500 text-center">
                  Password must match
                </p>
              </div>
            )}
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
