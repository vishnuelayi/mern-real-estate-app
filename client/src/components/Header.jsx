import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const singnedInUser = useSelector((state) => state.auth?.singnedInUser);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Elayi</span>{" "}
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Contact
            </li>
          </Link>

          {singnedInUser ? (
            <Link to="/profile">
              <img
                src={singnedInUser?.image}
                className="h-7 w-7 rounded-lg ml-4"
              />
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
