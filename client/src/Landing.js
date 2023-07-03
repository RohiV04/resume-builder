import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-slate-900">
      <div>
        <>
          {/* Hero */}
          <div className="bg-slate-900">
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                  <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Welcome to our Resume Builder!
                  </h1>
                </div>
                {/* End Title */}
                <div className="max-w-3xl text-center mx-auto">
                  <p className="text-lg text-gray-400">
                    Create a professional resume with ease and land your dream
                    job.
                  </p>
                </div>
                {/* Buttons */}
                <div className="text-center">
                  <Link to="/resume">
                    <a
                      className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      Get started
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
          {/* End Hero */}
        </>

        <>
          <div className="container">
            {/* Icon Blocks */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 ">
                {/* Icon Block */}
                <div >
                  <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl  before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-white ">
                    <svg
                      className="w-7 h-7 text-slate-900 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                  <div className="mt-5 ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white ">
                      Responsive
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Responsive, and mobile-first project on the web
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div>
                  <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                    <svg
                      className="w-7 h-7 text-slate-900 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                      <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                      <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Time Saving
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Save you valuable time in creating a professional resume.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div>
                  <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                    <svg
                      className="w-7 h-7 text-slate-900 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Easy Download
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Download your resume in PDF and print it out for in-person
                      interviews.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div>
                  <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                    <svg
                      className="w-7 h-7 text-slate-900 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Friendly Interface
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Our resume builder provides a user-friendly interface
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
            </div>
          </div>
          {/* End Icon Blocks */}
        </>

        <>
          {/* Masonry Cards */}
          <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-6">
              <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="text-sm font-bold teblack rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:teblack">
                      Workplace personalities
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-black rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-black">
                      Women in engineering
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-black rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-black">
                      Pride 2021
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 sm:col-span-6 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-black rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-black">
                      Data at Preline
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className="col-span-12 sm:col-span-6 md:col-span-4">
                {/* Card */}
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  href="#"
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                      src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-dark rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-dark">
                      Empowered management
                    </div>
                  </div>
                </a>
                {/* End Card */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Masonry Cards */}
        </>
        <>
          {/* Features */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <div className="aspect-w-5 aspect-h-3">
      <img
        className="pl-4 mx-11 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="Image Description"
      />
    </div> */}
            {/* Grid */}
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                  We tackle the challenges start-ups face
                </h2>
                <p className="mt-2 md:mt-4 text-gray-500">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common
                  pain points that we have encountered in various products and
                  projects.
                </p>
              </div>
              {/* End Col */}
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  {/* Icon Block */}
                  <div className="flex gap-x-5">
                    <svg
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Creative minds
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        We choose our teams carefully. Our people are the secret
                        to great work.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex gap-x-5">
                    <svg
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Simple and affordable
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        From boarding passes to movie tickets, there's pretty
                        much nothing you can't store with Preline.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex gap-x-5">
                    <svg
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Industry-leading documentation
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Our documentation and extensive Client libraries contain
                        everything a business needs to build a custom
                        integration.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex gap-x-5">
                    <svg
                      className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                      />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Designing for people
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        We actively pursue the right balance between
                        functionality and aesthetics, creating delightful
                        experiences.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Features */}
        </>
        <>
          {/* Testimonials */}
          <div className="overflow-hidden bg-slate-900">
            <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              {/* Title */}
              <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
                  Loved by business and individuals across the globe
                </h2>
              </div>
              {/* End Title */}
              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-dark dark:text-dark ">
                        " With Preline, we're able to easily track our
                        performance in full detail. It's become an essential
                        tool for us to grow and engage with our audience. "
                      </p>
                    </div>
                    <div className="p-4 bg-slate-100 rounded-b-xl md:px-7 dark:bg-slate-900">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow ml-3">
                          <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-200">
                            Josh Tyson
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Product Manager | Capsule
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-dark dark:text-blue-600">
                        " In September, I will be using this theme for 2 years.
                        I went through multiple updates and changes and I'm very
                        glad to see the consistency and effort made by the team.
                        "
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-900">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow ml-3">
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                            Luisa
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Senior Director of Operations | Fitbit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="flex h-auto">
                  <div className="flex flex-col bg-white rounded-xl  dark:bg-slate-900">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-dark dark:text-dark">
                        " Refreshing and Thought provoking design and it changes
                        my view about how I design the websites. Great
                        typography, modern clean white design, nice tones of the
                        color. "
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-900">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow ml-3">
                          <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                            Alisa Williams
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Entrepreneur | Happy customer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                {/* Stats */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Accuracy rate
                  </h4>
                  <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                    99.95%
                  </p>
                  <p className="mt-1 text-gray-400">in fulfilling orders</p>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Startup businesses
                  </h4>
                  <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                    2,000+
                  </p>
                  <p className="mt-1 text-gray-400">partner with Preline</p>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Happy customer
                  </h4>
                  <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                    85%
                  </p>
                  <p className="mt-1 text-gray-400">this year alone</p>
                </div>
                {/* End Stats */}
              </div>
              {/* End Grid */}
              {/* SVG Element */}
              <div
                className="absolute bottom-0 right-0 transform lg:translate-x-32"
                aria-hidden="true"
              >
                <svg
                  className="w-40 h-auto sm:w-72"
                  width={1115}
                  height={636}
                  viewBox="0 0 1115 636"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                    fill="currentColor"
                    className="fill-orange-500"
                  />
                  <path
                    d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                    fill="currentColor"
                    className="fill-cyan-500"
                  />
                  <path
                    d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                    fill="currentColor"
                    className="fill-white"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
          {/* End Testimonials */}
        </>
      </div>
    </div>
  );
}

export default Landing;
