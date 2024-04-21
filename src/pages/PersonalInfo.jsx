import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (name === "") {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }

    if (email === "") {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    if (number === "") {
      setNumberAlert(true);
    } else {
      setNumberAlert(false);
    }

    if (name !== "" && email !== "" && number !== "") {
      navigate("/education");
    }
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleDateChange = (event) => {
    setDob(event.target.value);
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Personal info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        {/* Image Upload Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Upload Image
          </label>
          <input
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            className="mb-6"
          />
        </div>

        {/* Personal Info Section */}

        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g.Stephen King"
          />
          <span
            className={`${
              nameAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
          <label className="text-primary-marineBlue font-[500] mb-2">
            Email Adress
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="email"
            placeholder="e.g.stephenking@lorem.com"
          />
          <span
            className={`${
              emailAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[100px] right-[10px]`}
          >
            This field is required
          </span>
          <label className="text-primary-marineBlue font-[500] mb-2">
            Phone Number
          </label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            className={`${
              nameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
          <span
            className={`${
              numberAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>

          {/* Gender Selection */}
          <div className="flex items-center mb-6">
            <label className="text-primary-marineBlue font-[500] mr-4">
              Gender:
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
              />
              <span className="ml-2 text-primary-marineBlue">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
                className="form-radio text-primary-marineBlue focus:ring-primary-marineBlue"
              />
              <span className="ml-2 text-primary-marineBlue">Female</span>
            </label>
          </div>

          {/* Date of Birth */}
          <label className="text-primary-marineBlue font-[500] mb-2">
            Date of Birth
          </label>
          <input
            onChange={handleDateChange}
            type="date"
            className="mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3"
          />
        </div>
        <div className="flex justify-end items-end py-[2px] mt-[120px] sm:mt-[26px]">
          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="sumbit"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
