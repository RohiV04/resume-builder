 import React from "react";

const Education = ({ formData, setFormData }) => {
  return (
    <div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="edu1_qualification"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Education
            </label>
            <div className="mt-2.5">
              <input
                type="edu1_qualification"
                name="edu1_qualification"
                id="edu1_qualification"
                value={formData.edu1_qualification}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    edu1_qualification: e.target.value,
                  });
                }}
                autoComplete="edu1_qualification"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="edu1_school"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Institution
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="edu1_school"
                id="edu1_school"
                autoComplete="edu1_school"
                value={formData.edu1_school}
                onChange={(e) => {
                  setFormData({ ...formData, edu1_school: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="edu1_year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Study Year
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu1_year"
                id="edu1_year"
                autoComplete="edu1_year"
                value={formData.edu1_year}
                onChange={(e) => {
                  setFormData({ ...formData, edu1_year: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="edu1_score"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Percentage / CGPA
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu1_score"
                id="edu1_score"
                autoComplete="edu1_score"
                value={formData.edu1_score}
                onChange={(e) => {
                  setFormData({ ...formData, edu1_score: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="edu2_qualification"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Education
            </label>
            <div className="mt-2.5">
              <input
                type="edu2_qualification"
                name="edu2_qualification"
                id="edu2_qualification"
                value={formData.edu2_qualification}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    edu2_qualification: e.target.value,
                  });
                }}
                autoComplete="edu2_qualification"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="edu2_school"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Institution
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="edu2_school"
                id="edu2_school"
                autoComplete="edu2_school"
                value={formData.edu2_school}
                onChange={(e) => {
                  setFormData({ ...formData, edu2_school: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="edu2_year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Study Year
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu2_year"
                id="edu2_year"
                autoComplete="edu2_year"
                value={formData.edu2_year}
                onChange={(e) => {
                  setFormData({ ...formData, edu2_year: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="edu2_score"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Percentage / CGPA
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu2_score"
                id="edu2_score"
                autoComplete="edu2_score"
                value={formData.edu2_score}
                onChange={(e) => {
                  setFormData({ ...formData, edu2_score: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
