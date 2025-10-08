import { useState } from "react";

function FormFive() {
  // Step 1: All form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    termsAccepted: false,
  });

  // Step 2: For errors and submitted data
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Step 3: Handle input changes dynamically
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // Step 4: Validate before submitting
  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.country) newErrors.country = "Please select country";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms";

    return newErrors;
  }

  // Step 5: Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        termsAccepted: false,
      });
    } else {
      setSubmittedData(null);
    }
  }

  return (
    <div>
      <h2>Assignment 5: Complete Registration Form 📝</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        {/* Gender */}
        <div>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        {/* Country */}
        <div>
          <label>Country: </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        </div>

        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />{" "}
            I accept the Terms & Conditions
          </label>
          {errors.termsAccepted && (
            <p style={{ color: "red" }}>{errors.termsAccepted}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>

      <hr />

      {/* Show Submitted Data */}
      {submittedData && (
        <div>
          <h3>✅ Registration Successful!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p>
            <strong>Accepted Terms:</strong>{" "}
            {submittedData.termsAccepted ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormFive;
