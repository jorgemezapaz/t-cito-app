import React, { useState } from 'react'
import { Wrapper } from './Wrapper';
import cupOftea from '../assets/img/cup_of_tea.png'

const menuiTems = [
  {
    title: "Ingresar",
    path: "/login",
  },
  {
    title: "Explorar",
    path: "/explore",
  },
];
export const NavBar = () => {
  const BurgerIcon = () => (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-menu-2"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>)

  return (
    <Wrapper>
      <header
        className="flex flex-col lg:flex-row md:flex-row justify-between items-center my-5">
        <div
          className="flex w-full lg:w-auto md:w-auto items-center justify-between align-middle">
          <a href="/" className="text-lg flex items-center">
            <img src={cupOftea} className="w-12" />
            <span className="font-bold text-sky-400">T-</span>
            <span className="text-slate-500">cito</span>
          </a>
          <div className="block lg:hidden md:hidden ">
            <span className='cursor-pointer'>
              <BurgerIcon />
            </span>
          </div>
        </div>
        <div id="menu-list" className="hidden lg:block md:block">
          <ul className="flex flex-col lg:flex-row md:flex-row lg:gap-3 md:gap-3">
            {
              menuiTems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                    {item.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="hidden lg:block md:block">
          <a
            href="/sign-up"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Registrate!
          </a>
        </div>
      </header>
    </Wrapper>
  )
}
