import React from 'react';
import MobileNav from './MobileNav';
import Link from 'next/link';
import HR from '../common/HR';

type Props = {};
const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];
const Navbar = (props: Props) => {
  return (
    <>
      <header className="hidden lg:px-4 pt-2 lg:flex fixed z-50 top-0 h-[10vh] items-center justify-between w-full left-0 backdrop-blur-md">
        <nav className="flex bg-dark-primary/50 border border-b-0 h-full items-center py-4 justify-between w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4 backdrop-blur-md">
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
      </header>
      <MobileNav />
    </>
  );
};

export default Navbar;
