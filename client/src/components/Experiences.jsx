// import React from "react";

// const Experiences = ({ formData, setFormData }) => {
//   // exp1_org: "",
//   //   exp1_pos: "",
//   //   exp1_desc: "",
//   //   exp1_dur: "",
//   //   exp2_org: "",
//   //   exp2_pos: "",
//   //   exp2_des: "",
//   //   exp2_dur: "",
//   return (
//     <div className="container">
//       <form className="row g-3">
//         <div className="col-md-6">
//           <label for="name" className="form-label">
//             Enter your first company name you worked for
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={formData.exp1_org}
//             onChange={(e) => {
//               setFormData({ ...formData, exp1_org: e.target.value });
//             }}
//           />
//         </div>

//         <div className="col-md-6">
//           <label for="phone" className="form-label">
//             What was your designation?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="phone"
//             value={formData.exp1_pos}
//             onChange={(e) => {
//               setFormData({ ...formData, exp1_pos: e.target.value });
//             }}
//           />
//         </div>
//         <div className="col-md-6">
//           <label for="Email" className="form-label">
//             How many years you worked there for?
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="Email"
//             value={formData.exp1_dur}
//             onChange={(e) => {
//               setFormData({ ...formData, exp1_dur: e.target.value });
//             }}
//           />
//         </div>
//         <div className="col-12">
//           <label for="edu1_desc" className="form-label">
//             Tell us about your job description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="github"
//             value={formData.exp1_desc}
//             onChange={(e) => {
//               setFormData({ ...formData, exp1_desc: e.target.value });
//             }}
//           />
//         </div>
//         <hr />
//         <div className="col-md-6">
//           <label for="name" className="form-label">
//             Enter your Second company name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={formData.exp2_org}
//             onChange={(e) => {
//               setFormData({ ...formData, exp2_org: e.target.value });
//             }}
//           />
//         </div>
//         <div className="col-md-6">
//           <label for="Email" className="form-label">
//             What was your designation?
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="Email"
//             value={formData.exp2_pos}
//             onChange={(e) => {
//               setFormData({ ...formData, exp2_pos: e.target.value });
//             }}
//           />
//         </div>
//         <div className="col-md-6">
//           <label for="phone" className="form-label">
//             How many years you worked there?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="phone"
//             value={formData.exp2_dur}
//             onChange={(e) => {
//               setFormData({ ...formData, exp2_dur: e.target.value });
//             }}
//           />
//         </div>

//         <div className="col-12">
//           <label for="edu1_desc" className="form-label">
//             Tell us about your job description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="github"
//             value={formData.exp2_desc}
//             onChange={(e) => {
//               setFormData({ ...formData, exp2_desc: e.target.value });
//             }}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Experiences;
import React from "react";

const Experiences = ({ formData, setFormData }) => {
  return (
    <>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="exp1_org" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="exp1_org"
                id="exp1_org"
                autoComplete="exp1_org"
                value={formData.exp1_org}
                onChange={(e) => {
                  setFormData({ ...formData, exp1_org:e.target.value}  );
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="exp1_pos" className="block text-sm font-semibold leading-6 text-gray-900">
              Job Role
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp1_pos"
                id="exp1_pos"
                autoComplete="exp1_pos"
                value={formData.exp1_pos}
                onChange={(e) => {
                  setFormData({ ...formData, exp1_pos: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="exp1_dur" className="block text-sm font-semibold leading-6 text-gray-900">
              Duration
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp1_dur"
                id="exp1_dur"
                autoComplete="exp1_dur"
                value={formData.exp1_dur}
                onChange={(e) => {
                  setFormData({ ...formData,  exp1_dur: e.target.value  });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="exp1_desc" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="exp1_desc"
                id="exp1_desc"
                value={formData.exp1_desc}
                onChange={(e) => {
                  setFormData({ ...formData,  exp1_desc: e.target.value  });
                }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="exp2_org" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="exp2_org"
                id="exp2_org"
                autoComplete="exp2_org"
                value={formData.exp2_org}
                onChange={(e) => {
                  setFormData({ ...formData, exp2_org: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="exp2_pos" className="block text-sm font-semibold leading-6 text-gray-900">
              Job Role
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp2_pos"
                id="exp2_pos"
                autoComplete="exp2_pos"
                value={formData.exp2_pos}
                onChange={(e) => {
                  setFormData({ ...formData, exp2_pos: e.target.value });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="exp2_dur" className="block text-sm font-semibold leading-6 text-gray-900">
              Year
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp2_dur"
                id="exp2_dur"
                autoComplete="exp2_dur"
                value={formData.exp2_dur}
                onChange={(e) => {
                  setFormData({ ...formData, exp2_dur: e.target.value  });
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="exp2_desc" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="exp2_desc"
                id="exp2_desc"
                value={formData.exp2_desc}
                onChange={(e) => {
                  setFormData({ ...formData,  exp2_desc: e.target.value  });
                }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Experiences;