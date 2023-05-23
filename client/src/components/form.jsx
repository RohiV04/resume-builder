import React, { useState } from "react";
import axios from "axios";
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
  skills: [""],
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
const form = () => {
  const [formData,setFormData]=useState(initialState);
  const [page, setPage] = useState(0);
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
      return <Education formData={formData} setFormData={setFormData}/>;
    } else if (page === 2) {
      return <Experience formData={formData} setFormData={setFormData}/>;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData}/>;
    } else {
      return <Extras />;
    }
  };

  return (
    <>
      {/* <h1>Form</h1> */}
      <div>
        {/* <h2 className="text-center text-2xl text-green-400 font-serif"> {}</h2> */}
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
              disabled={page === 4}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default form;
