import React from "react";

export default function Header() {
  return (
    <div className="">
      <nav class="flex items-center justify-between flex-wrap bg-[#E5E5E5] bg-opacity-20 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <span class="font-semibold text-xl tracking-tight">Maria</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-xl font-semibold lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-600 mr-4"
            >
              Talk to Maria
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-neutral-600 mr-4"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black bg-[#14FF00] border-[#14FF00] hover:border-transparent hover:text-white hover:bg-[14FF00] mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
