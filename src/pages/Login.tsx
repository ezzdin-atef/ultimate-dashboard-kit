import React from "react";

export default function LoginPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <header>
              <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back
              </h1>
              <p className="my-1 text-gray-600 text-sm">Sign in to your account</p>
            </header>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/manage";
              }}
            >
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </form>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <button
                type="button"
                className="gap-1 w-full border text-center bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
              >
                <img src="/icons/google.svg" alt="google icon" width={18} />
                Sign in with Google
              </button>
              <button
                type="button"
                className="gap-1 w-full border text-center bg-transparent hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center"
              >
                <img src="/icons/github.svg" alt="google icon" width={18} />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
