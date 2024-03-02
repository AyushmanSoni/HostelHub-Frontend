import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    enrollmentno: "",
    email: "",
    phoneno: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Enrollment number:
        <input
          type="text"
          name="enrollmentno"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Email Id:
        <input
          type="text"
          name="email"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone No:
        <input
          type="number"
          name="phoneno"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}