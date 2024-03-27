import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemsOnQuery } from "../features/listing/listingSlice";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sideBarData, setSideBarData] = useState({
    searchTerm: "",
    pool: false,
    garden: false,
    parking: false,
    wifi: false,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const searchTermFromUrl = urlParams.get("searchTerm");
    const poolFromUrl = urlParams.get("pool");
    const gardenFromUrl = urlParams.get("garden");
    const parkingFromUrl = urlParams.get("parking");
    const wifiFromUrl = urlParams.get("wifi");
 

    if (
      searchTermFromUrl ||
      poolFromUrl ||
      gardenFromUrl ||
      parkingFromUrl ||
      wifiFromUrl 
    ) {
      setSideBarData({
        searchTerm: searchTermFromUrl || "",
        pool: poolFromUrl === "true" ? true : false,
        garden: gardenFromUrl === "true" ? true : false,
        parking: parkingFromUrl === "true" ? true : false,
        wifi: wifiFromUrl === "true" ? true : false,
        
      });
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setSideBarData({ ...sideBarData, [id]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams();
    if (sideBarData.searchTerm !== "") {
      urlParams.set("searchTerm", sideBarData.searchTerm);
    }

    if (sideBarData.pool) {
      urlParams.set("pool", sideBarData.pool);
    }
    if (sideBarData.garden) {
      urlParams.set("garden", sideBarData.garden);
    }
    if (sideBarData.wifi) {
      urlParams.set("wifi", sideBarData.wifi);
    }
    if (sideBarData.parking) {
      urlParams.set("parking", sideBarData.parking);
    }

    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);
    alert(searchQuery)
    dispatch(getItemsOnQuery(urlParams));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b-2 p-7 md:border-r-1 md:min-h-screen">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center">
            <label className="whitespace-nowrap font-semibold">
              Search Term
            </label>
            <input
              placeholder="Search.."
              className="p-3 rounded-lg focus-within:outline-none w-full"
              id="searchTerm"
              onChange={handleChange}
              value={sideBarData.searchTerm}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Amenities</label>
            <div className="flex flex-row flex-wrap gap-3">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  value="wifi"
                  className="w-4 ml-3"
                  id="wifi"
                  checked={sideBarData.wifi}
                  onChange={handleChange}
                />
                <span>Wi-Fi</span>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  value="parking"
                  className="w-4 ml-3"
                  id="parking"
                  checked={sideBarData.parking}
                  onChange={handleChange}
                />
                <span>Parking</span>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  value="garden"
                  className="w-4 ml-3"
                  id="garden"
                  checked={sideBarData.garden}
                  onChange={handleChange}
                />
                <span>Garden</span>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  value="pool"
                  className="w-4 ml-3"
                  id="pool"
                  checked={sideBarData.pool}
                  onChange={handleChange}
                />
                <span>Pool</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center mt-5">
            <label className="font-semibold">Sort</label>
            <select
              placeholder="Search.."
              className="p-2 rounded-lg focus-within:outline-none ml-14"
              id="sort"
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="createdAt" id="createdAt">
                Latest
              </option>
              <option value="trending" id="trending">
                Trending
              </option>
              <option value="price asc" id="price_asc">
                Price low to high
              </option>
              <option value="price desc" id="price_desc">
                Price high to low
              </option>
            </select>
          </div>

          <button
            className="p-3 bg-slate-700 w-full text-white rounded-lg hover:opacity-95"
            type="submit"
          >
            SEARCH
          </button>
        </form>
      </div>
      <div className="border-2 flex-1">
        <h1 className="text-3xl font-semibold p-3 text-slate-700 mt-5 ml-2">
          Search Results
        </h1>
      </div>
    </div>
  );
};

export default Search;
