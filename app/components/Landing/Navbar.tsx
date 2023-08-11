import React from 'react';
import MobileNav from './MobileNav';
import Link from 'next/link';
import HR from '../common/HR';

type Props = {};
const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="hidden opacity-0 sm:opacity-100 lg:flex items-center py-4 justify-between top-0 w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4 left-0 backdrop-blur-md">
        <h1 className="font-semibold text-4xl uppercase">Sandeep</h1>
        <ul className="flex items-center  uppercase justify-evenly sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-6">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="hover:text-slate-400 text-xl brightness-125 transition-colors cursor-pointer"
            >
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <HR classes="absolute bottom-0 w-[90%]" />
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
