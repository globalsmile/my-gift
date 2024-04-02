import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <>
            <Nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <NavMenu>
                    <NavLink to="/Gifts"> <a href="#Gifts" className="ml-3 text-xl"> Select or add your gift item of choice</a> Gifts </NavLink>
                    <NavLink to="/Recievers"> <a href="#Receivers" className="mr-5 hover:text-white"> Add a list of receipients you would like to show some love. </a> Receivers </NavLink>
                    <NavLink to="/Records"> <a href="#Records" className="mr-5 hover:text-white"> Track the distribution of your gift items. See how much love you have shared. </a> Records </NavLink>
                    <NavLink to="/Reminders"> <a href="#Reminders" className="mr-5 hover:text-white"> Let the people you want to show some love be aware there are gift items for them. </a> Reminders </NavLink>
                    <NavLink to="/Suggestions">  <a href="#Suggestions" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"> Collaborate with colleagues and friends on the best way to share some love. </a> Suggestions </NavLink>
                </NavMenu>
            </Nav>
        </>
        </div>
    </header>
    );
};
 
export default Navbar;