import React from "react";

const Extras = ({ formData, setFormData }) => {
  // extra_1: "",
  //   extra_2: "",
  return (
    <div className="container d-flex justify-content-center">
      <form className="row g-3">
        
        <div className="col-md-12">
          <label for="name" className="form-label">
            Languages
          </label>
          <input
            type="text"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="name"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>



        <div className="col-md-">
          <label for="name" className="form-label">
            Hobbies
          </label>
          <input
            type="text"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="name"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Extras;
