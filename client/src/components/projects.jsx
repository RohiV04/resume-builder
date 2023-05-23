import React from 'react'


const projects = ({ formData, setFormData }) => {
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
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                // value={formData.name}
                // onChange={(e)=>{
                //   setFormData({...formData,name:e.target.value})
                // }}
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                // value={formData.email}
                // onChange={(e)=>{
                //   setFormData({...formData,email:e.target.value})
                // }}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                // value={formData.phone}
                // onChange={(e)=>{
                //   setFormData({...formData,phone:e.target.value})
                // }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Linkedin
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                autoComplete="linkedin"
                // value={formData.linkedin}
                // onChange={(e)=>{
                //   setFormData({...formData,linkedin:e.target.value})
                // }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="github"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Github
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="github"
                id="github"
                autoComplete="github"
                // value={formData.github}
                // onChange={(e)=>{
                //   setFormData({...formData,github:e.target.value})
                // }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="skills"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Skills
            </label>
            <div className="mt-2.5">
              <textarea
                name="skills"
                id="skills"
                // value={formData.skills[0]}
                // onChange={(e)=>{
                //   setFormData({...formData,skills:e.target.value})
                // }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>

        </div>

      </form>
    </div>
  )
}


export default projects
