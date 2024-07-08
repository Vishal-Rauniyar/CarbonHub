// src/components/Profile.js
import { useState } from "react";
import "./Profile.css";
import avatarImage from "../../Assets/Avatar Image- ProfileSection.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    education: "",
    genderIn: "",
    phoneNumber: "",
    country: "",
    city: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <Header />
      {/* Eclipse 1 */}
      <div className="eclipse1"></div>

      {/* Profile Section */}
      <div className="profileDiv">
        <h1 className="profileHeading">Profile</h1>
        <div className="avatarAndName">
          <div className="imgDiv">
            <img src={avatarImage} alt="Avatar" />
          </div>
          <div className="nameDiv">
            <h3 className="profileName">Account user</h3>
            <p className="profilePara">
              Your account is ready, you can now update it!
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="inputFields">
          <div className="row1">
            <div className="fNameDiv">
              <p className="firstName">First Name</p>
              <input
                type="text"
                id="firstName"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="lNameDiv">
              <p className="lastName">Last Name</p>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Your Surname"
                onChange={handleChange}
              />
            </div>
            <div className="emailDiv">
              <p className="email">Email</p>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row2">
            <div className="genderDiv">
              <p className="gender">Gender</p>
              <select id="genderIn" onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="phoneDiv">
              <p className="phoneNum">Phone Number</p>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row3">
            <div className="dobDiv">
              <p className="dobHead">Date of Birth</p>
              <input
                type="date"
                id="dob"
                placeholder="Your Date of Birth"
                onChange={handleChange}
              />
            </div>
            <div className="countryDiv">
              <p className="countryName">Choose Your Country</p>
              <input
                type="text"
                id="country"
                placeholder="Your Country"
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row4">
            <div className="eduDiv">
              <p className="education">Education Level</p>
              <input
                type="text"
                id="education"
                placeholder="Your Highest Qualification"
                onChange={handleChange}
              />
            </div>
            <div className="cityDiv">
              <p className="city">City</p>
              <input
                type="text"
                id="city"
                placeholder="Your City"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="saveButtonDiv">
          <button className="saveButton" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>

      {/* Eclipse 2 */}
      <div className="eclipse2"></div>
      <Footer />
    </div>
  );
};

export default Profile;
