import React from "react";

const extras = ({ formData, setFormData }) => {
  return (
    <div>
      <div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="languages"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Languages
              </label>
              <div className="mt-2.5">
                <input
                  type="languages"
                  name="languages"
                  id="languages"
                  value={formData.languages}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      languages: e.target.value,
                    });
                  }}
                  autoComplete="languages"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="hobbies"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Hobbies
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="hobbies"
                  id="hobbies"
                  autoComplete="hobbies"
                  value={formData.hobbies}
                  onChange={(e) => {
                    setFormData({ ...formData, hobbies: e.target.value });
                  }}
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default extras;
