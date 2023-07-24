import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Action/userAction";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const labels = ["Name", "Email", "Password"];

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(register(formData.name,formData.email,formData.password));
    // console.log(formData);

    // abc(formData)
  };

  // const abc = ({name,email,password}) => {
  //   console.log(email,password,name);
  // };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white rounded-lg shadow-md p-8 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {labels.map((label, index) => (
          <div key={index} className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor={`input-${index}`}
            >
              {label}
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-lg"
              id={`input-${index}`}
              type={index > 1 ? "password" : "text"}
              name={label.toLowerCase()}
              onChange={handleChange}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
