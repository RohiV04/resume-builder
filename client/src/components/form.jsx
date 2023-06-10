import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Education from "./education";
import Personal from "./personal";
import Project from "./projects";
import Experience from "./experience";
import Extras from "./extras";

const initialState = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  skills: "",
  experience: [
    {
      exp1_org: "",
      exp1_pos: "",
      exp1_desc: "",
      exp1_dur: "",
    },
    {
      exp2_org: "",
      exp2_pos: "",
      exp2_desc: "",
      exp2_dur: "",
    },
  ],
  education: [
    {
      edu1_school: "",
      edu1_year: "",
      edu1_qualification: "",
      edu1_score: "",
    },
    {
      edu2_school: "",
      edu2_year: "",
      edu2_qualification: "",
      edu2_score: "",
    },
  ],
  project: [
    {
      proj1_title: "",
      proj1_link: "",
      proj1_desc: "",
    },
    {
      proj2_title: "",
      proj2_link: "",
      proj2_desc: "",
    },
  ],
  languages: "",
  hobbies: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [page, setPage] = useState(0);
  const [success, setSuccess] = useState(false);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Project",
    "Extra Circular Activities",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };
const baseurl="https://resume-backend.adaptable.app";
  const handleSubmit = () => {
    console.log("Form submitted");
    // Make a POST request to the "/create-pdf" endpoint
    // axios
    //   .post("http://localhost:8000/resumes", formData)
    //   .then(console.log("Stored"))
    //   .catch(console.log("err"));
    axios
    .post(baseurl + "/create-pdf", formData, { responseType: "arraybuffer" })
    .then((response) => {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setSuccess(true);
    })
    .catch((error) => {
      console.log(error);
    });
  
  

  return (
    <>
      <div>
        <p className="mt-2 text-2xl text-#11103e leading-8 text-sky-400 text-center font-bold">
          {FormTitle[page]}
        </p>
        <PageDisplay />
        <div className="text-center">
          <div className="mt-10 flex justify-center items-center">
            <button
              className="block mr-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>

            <button
              className="block mr-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={page === 5}
              onClick={() => {
                if (page === FormTitle.length - 1) {
                  // Last page, submit the form
                  handleSubmit();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitle.length - 1 ? "Download " : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
