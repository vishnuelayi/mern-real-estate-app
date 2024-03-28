import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const singnedInUser = useSelector((state) => state.auth?.singnedInUser);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  //searchTerm inside the header search box should be updated whenever the url search params change
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
  }, [location.search]);
  

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold  sm:text-xl flex flex-wrap">
            <span className="text-slate-500 text-2xl">Elayi</span>{" "}
            <span className="text-slate-700 text-2xl">Estate</span>
          </h1>
        </Link>
        <form
          className="bg-slate-100 p-3 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="text-slate-700" />
          </button>
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
