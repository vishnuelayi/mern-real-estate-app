import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b-2 p-7 md:border-r-1 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <label className="whitespace-nowrap font-semibold">
              Search Term
            </label>
            <input
              placeholder="Search.."
              className="p-3 rounded-lg focus-within:outline-none w-full"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Ameneties</label>
            <div className="flex flex-row flex-wrap gap-3">
              <div className="flex gap-1">
                <input type="checkbox" value="wifi" className="w-4 ml-3" />
                <span>Wi-Fi</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" value="parking" className="w-4 ml-3" />
                <span>Parking</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" value="garden" className="w-4 ml-3" />
                <span>Garden</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" value="pool" className="w-4 ml-3" />
                <span>Pool</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center mt-5">
            <label className="font-semibold">Sort</label>
            <select
              placeholder="Search.."
              className="p-2 rounded-lg focus-within:outline-none ml-14"
            >
              <option value="" disabled>Select an option</option>
              <option value="latest">Letest</option>
              <option value="trending">Trending</option>
              <option value="option3">Price low to high</option>
              <option value="option3">Price high to low</option>
            </select>
          </div>

          <button className="p-3 bg-slate-700 w-full text-white rounded-lg hover:opacity-95"  type="submit">
            SEARCH
          </button>
        </form>
      </div>
      <div className="border-2 flex-1">
        <h1 className="text-3xl font-semibold p-3 text-slate-700 mt-5 ml-2">Search Results</h1>
      </div>
    </div>
  );
};

export default Search;
