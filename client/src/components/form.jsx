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
      return <Personal />;
    } else if (page === 1) {
      return <Education />;
    } else if (page === 2) {
      return <Experience />;
    } else if (page === 3) {
      return <Project />;
    } else {
      return <Extras />;
    }
  };
  const [formData, setFormData] = useState(initialState);
  return (
    <>
      {/* <h1>Form</h1> */}
      <div>
        {/* <h2 className="text-center text-2xl text-green-400 font-serif"> {}</h2> */}
        <p className="mt-2 text-lg leading-8 text-gray-600 text">
        {FormTitle[page]}
        </p>
        <PageDisplay />
        <div className="text-center">
        <div className="mt-10">
          
     
        <button className="mr-6"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        
        <button

        disabled={page === 4}
          onClick={() => {
            
            setPage((currPage) => currPage + 1);
          }}>Next</button>
             </div>
        </div>
        
      </div>
    </>
  );
};

export default form;
