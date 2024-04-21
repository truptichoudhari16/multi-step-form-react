import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
  const [instituteName, setInstituteName] = useState("");
  const [degree, setDegree] = useState("");
  const [currentCGPA, setCurrentCGPA] = useState("");
  const [twelfthPercentage, setTwelfthPercentage] = useState("");
  const [tenthPercentage, setTenthPercentage] = useState("");

  const [instituteNameAlert, setInstituteNameAlert] = useState(false);
  const [degreeAlert, setDegreeAlert] = useState(false);
  const [currentCGPAAlert, setCurrentCGPAAlert] = useState(false);
  const [twelfthPercentageAlert, setTwelfthPercentageAlert] = useState(false);
  const [tenthPercentageAlert, setTenthPercentageAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (instituteName === "") {
      setInstituteNameAlert(true);
    } else {
      setInstituteNameAlert(false);
    }

    if (degree === "") {
      setDegreeAlert(true);
    } else {
      setDegreeAlert(false);
    }

    if (currentCGPA === "") {
      setCurrentCGPAAlert(true);
    } else {
      setCurrentCGPAAlert(false);
    }

    if (twelfthPercentage === "") {
      setTwelfthPercentageAlert(true);
    } else {
      setTwelfthPercentageAlert(false);
    }

    if (tenthPercentage === "") {
      setTenthPercentageAlert(true);
    } else {
      setTenthPercentageAlert(false);
    }

    if (
      instituteName !== "" &&
      degree !== "" &&
      currentCGPA !== "" &&
      twelfthPercentage !== "" &&
      tenthPercentage !== ""
    ) {
      navigate("/addons");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Education info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide your Education related details here ...
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Institute Name
          </label>
          <input
            onChange={(e) => setInstituteName(e.target.value)}
            className={`${
              instituteNameAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="J D College of Engineering"
          />
          <span
            className={`${
              instituteNameAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-[500] mb-2">
            Degree
          </label>
          <input
            onChange={(e) => setDegree(e.target.value)}
            className={`${
              degreeAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. B.Tech"
          />
          <span
            className={`${
              degreeAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-[500] mb-2">
            Current CGPA
          </label>
          <input
            onChange={(e) => setCurrentCGPA(e.target.value)}
            className={`${
              currentCGPAAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. 9.00"
          />
          <span
            className={`${
              currentCGPAAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-[500] mb-2">
            12th Percentage
          </label>
          <input
            onChange={(e) => setTwelfthPercentage(e.target.value)}
            className={`${
              twelfthPercentageAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. 80%"
          />
          <span
            className={`${
              twelfthPercentageAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-[500] mb-2">
            10th Percentage
          </label>
          <input
            onChange={(e) => setTenthPercentage(e.target.value)}
            className={`${
              tenthPercentageAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. 85%"
          />
          <span
            className={`${
              tenthPercentageAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>
        </div>
        <div className="flex justify-between items-center pt-[100px] sm:pt-[47px]">
          <button
            onClick={() => navigate("/")}
            className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
          >
            Go back
          </button>

          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="submit"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Education;
