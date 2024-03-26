import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b-2 p-7">
        <form>
          <div className="flex gap-2 items-center">
            <label className="whitespace-nowrap font-semibold">Search Term</label>
            <input placeholder="Search.." className="p-3 rounded-lg focus-within:outline-none w-full" />
          </div>
        </form>
      </div>

      <div className="border-2">
        <h1>Right Side</h1>
      </div>
    </div>
  );
};

export default Search;
