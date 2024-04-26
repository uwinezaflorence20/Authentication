import React, { useState } from 'react';

const Register = () => {
  // State variables to store form data and validation errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // If there are validation errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, you can proceed with form submission
    // For now, let's just log the form data
    console.log('Form submitted:', formData);
  };

  // Function to handle input changes and update form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear the corresponding error when user starts typing
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: ''
      });
    }
  };

  return (
    <div className="bg-green-300 ml-80 rounded-xl border border-red-400 h-[100vh] w-[100vh] flex justify-center items-center bg-cover text-white">
      <div>
        <h1 className="text-3xl text-blue-600 mb-8">Create your Account</h1>
        <div className="bg-yellow-200 rounded-xl border border-red-400 h-[40vh]  w-[60vh] flex justify-center items-center bg-cover text-blue-500">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={`mt-16 rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <input
                className={`rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 ${errors.password ? 'border-red-500' : ''}`}
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div>
              <input
                className={`rounded-2xl border w-96 h-8 border-blue-400 text-center bg-pink-300 m-4 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
            </div>
            <button className="rounded-2xl border border-blue-400 mx-32 bg-blue-300 m-4 w-44" type="submit">
              Register
            </button>
            <p className="text-center mb-8">
              Already Have an Account? <a href="/" className="text-black">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

