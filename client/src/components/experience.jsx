import React from 'react'
import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const experience = ({ formData, setFormData }) => {
    return (
        <>
            <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label
              htmlFor="exp1_org"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="relative mt-2.5">

              <input
                type="text"
                name="exp1_org"
                id="exp1_org"
                autoComplete="exp1_org"
                value={formData.experience[0].exp1_org}
                onChange={(e)=>{
                  setFormData({...formData,exp1_org:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="exp1_pos"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
             Job Role
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp1_pos"
                id="exp1_pos"
                autoComplete="exp1_pos"
                value={formData.experience[0].exp1_pos}
                onChange={(e)=>{
                  setFormData({...formData,exp1_pos:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="ex12_dur"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Duration
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp1_dur"
                id="exp1_dur"
                autoComplete="exp1_dur"
                value={formData.experience[0].exp1_dur}
                onChange={(e)=>{
                  setFormData({...formData,exp1_dur:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="exp2_desc"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="exp1_desc"
                id="exp2_desc"
                value={formData.experience[0].exp1_desc}
                onChange={(e)=>{
                  setFormData({...formData,exp1_desc:e.target.value})
                }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="exp2_org"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="relative mt-2.5">

              <input
                type="text"
                name="exp2_org"
                id="exp2_org"
                autoComplete="exp2_org"
                value={formData.experience[1].exp2_org}
                onChange={(e)=>{
                  setFormData({...formData,exp2_org:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="exp2_pos"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
             Job Role
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp2_pos"
                id="exp2_pos"
                autoComplete="exp2_pos"
                value={formData.experience[1].exp2_pos}
                onChange={(e)=>{
                  setFormData({...formData,exp2_pos:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="exp2_dur"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Year
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="exp2_dur"
                id="exp2_dur"
                autoComplete="exp2_dur"
                value={formData.experience[1].exp2_dur}
                onChange={(e)=>{
                  setFormData({...formData,exp2_dur:e.target.value})
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="exp2_desc"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="exp2_desc"
                id="exp2_desc"
                value={formData.experience[1].exp2_desc}
                onChange={(e)=>{
                  setFormData({...formData,exp2_desc:e.target.value})
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
    )
}

export default experience
