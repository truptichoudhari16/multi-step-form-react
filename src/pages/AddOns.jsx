import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOns = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState("");
  const [interestedDomain, setInterestedDomain] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [resume, setResume] = useState(null);

  const [skillsAlert, setSkillsAlert] = useState(false);
  const [domainAlert, setDomainAlert] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (skills === "") {
      setSkillsAlert(true);
    } else {
      setSkillsAlert(false);
    }

    if (interestedDomain === "") {
      setDomainAlert(true);
    } else {
      setDomainAlert(false);
    }

    // Additional validation logic for other fields can be added here

    if (skills !== "" && interestedDomain !== "") {
      navigate("/submit");
    }
  };

  const handleResumeUpload = (event) => {
    const uploadedResume = event.target.files[0];
    setResume(uploadedResume);
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Other info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Provide your other information here...
      </p>

      <form onSubmit={handleSumbit} className="flex flex-col">
        {/* Upload Resume Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Upload Resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="mb-6"
          />
        </div>

        {/* Skills Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Skills
          </label>
          <input
            onChange={(e) => setSkills(e.target.value)}
            className={`${
              skillsAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. Python, Java, etc."
          />
          <span
            className={`${
              skillsAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
        </div>

        {/* Interested Domain Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Interested Domain
          </label>
          <input
            onChange={(e) => setInterestedDomain(e.target.value)}
            className={`${
              domainAlert
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
            type="text"
            placeholder="e.g. Web Development, Data Science, etc."
          />
          <span
            className={`${
              domainAlert ? "inline" : "hidden"
            } text-primary-strawberryRed font-[500] absolute right-[10px]`}
          >
            This field is required
          </span>
        </div>

        {/* Portfolio Link Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            Portfolio Link
          </label>
          <input
            onChange={(e) => setPortfolioLink(e.target.value)}
            className="mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3"
            type="url"
            placeholder="https://example.com"
          />
        </div>

        {/* LinkedIn Profile Link Section */}
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-[500] mb-2">
            LinkedIn Profile Link
          </label>
          <input
            onChange={(e) => setLinkedinLink(e.target.value)}
            className="mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-[100px] sm:pt-[47px]">
          <button
            onClick={() => navigate("/education")}
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

export default AddOns;
