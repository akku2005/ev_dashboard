import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/name192.png"
const SignIn = () => {
  return (
    <div class="font-[sans-serif] text-[#333] bg-white flex items-center md:h-screen p-4">
      <div class="w-full max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 bg-gray-50 w-full sm:p-8 p-6 rounded relative">
          <div class="space-y-6 w-full">
            <div class="md:mb-16 mb-12">
              <Link href="javascript:void(0)"><img
                src={logo} alt="logo" class='w-40 inline-block' />
                <hr className='mt-3 '></hr>
              </Link>
            </div>
            <div class="space-y-10">
              <div class="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:w-7 sm:h-7 w-5 h-5 bg-[#333] fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </svg>
                <h4 class="sm:text-lg text-base font-semibold">Create Your Account</h4>
              </div>
              <div class="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:w-7 sm:h-7 w-5 h-5 bg-[#333] fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </svg>
                <h4 class="sm:text-lg text-base font-semibold">Simple & Secure Registration</h4>
              </div>
              <div class="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:w-7 sm:h-7 w-5 h-5 bg-[#333] fill-white rounded-full p-1 shrink-0" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                </svg>
                <h4 class="sm:text-lg text-base font-semibold">Terms and Conditions Agreement</h4>
              </div>
            </div>
          </div>
          <form class="md:max-w-sm w-full mx-auto">
            <div class="mb-8">
              <h3 class="text-2xl font-extrabold">Register</h3>
            </div>
            <div class="space-y-6">
              <div>
                <label class="text-sm mb-2 block">Name</label>
                <div class="relative flex items-center">
                  <input name="name" type="text" required class="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]" placeholder="Enter name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-sm mb-2 block">Email Id</label>
                <div class="relative flex items-center">
                  <input name="email" type="email" required class="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]" placeholder="Enter email" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label for="remember-me" class="ml-3 block text-sm">
                  I accept the <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>
            </div>
            <div class="!mt-10">
              <button type="button" class="w-full py-3 px-4 text-sm font-semibold rounded bg-[#333] hover:bg-[#222] text-white focus:outline-none">
                Create Account
              </button>
            </div>
            <p class="text-sm mt-6 text-center">Already have an account? 
            <Link to="/login">
            <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Login here</a>
            </Link>
            </p>
          </form>
          <div class="divider absolute left-0 right-0 mx-auto w-1 h-full border-l border-[#333] max-md:hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
