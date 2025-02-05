import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import { BiCategory } from "react-icons/bi";

const Navbar = () => {


  const navMenuDivRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", check);

    return () => {
      document.removeEventListener("click", check);
    };
  });

  function check(e) {
    const target = e.target || window.event.srcElement;

    // Nav Menu
    if (!checkParent(target, navMenuDivRef.current)) {
      // click NOT on the menu
      if (checkParent(target, navMenuRef.current)) {
        // click on the link
        if (navMenuDivRef.current.classList.contains("hidden")) {
          navMenuDivRef.current.classList.remove("hidden");
        } else {
          navMenuDivRef.current.classList.add("hidden");
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDivRef.current.classList.add("hidden");
      }
    }
  }

  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t === elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }



  return (
    <div id="header" className="bg-opaque fixed w-full z-30 top-0 text-white bg-gradient-to-r from-green-400 to-blue-500">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="pl-1 flex items-center">
      <a class="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        StudyAI
      </a>
    </div>
    <div class="block lg:hidden pr-4">
      <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
        </li>
        <li class="mr-3">
        <Link
        className=
            " mx-auto lg:mx-0  text-black rounded-full mt-4 lg:mt-0  opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out py-2 px-5  flex items-center gap-3 "
        to="/about"
      >About us
      </Link>
        </li>
        <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Features</a>
        </li>
      </ul>
      <Link
      className=
          " mx-auto lg:mx-0  bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out py-2 px-5  flex items-center gap-3 "
      to="/select"
    >Login
    </Link>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </div>
  )
}

export default Navbar;