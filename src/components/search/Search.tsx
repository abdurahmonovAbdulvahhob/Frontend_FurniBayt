import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleSuggestedSearch = (term: string) => {
    navigate(`/search?query=${term}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      {/* Search Bar */}
      <div className="w-full max-w-2xl flex items-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-l-lg outline-none text-gray-700 text-sm"
        />
        <button
          onClick={handleSearch}
          className="p-4 bg-amber-500 text-white rounded-r-lg hover:bg-amber-600 transition duration-300"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </div>

      {/* Suggested Searches */}
      <div className="mt-10 flex flex-wrap gap-4 max-w-2xl justify-center">
        {[
          "Sofa",
          "Table",
          "Chair",
          "Bed Frame",
          "Bookshelf",
          "Coffee Table",
          "Wardrobe",
          "Armchair",
        ].map((term) => (
          <button
            key={term}
            onClick={() => handleSuggestedSearch(term)}
            className="px-6 py-3 bg-white shadow-md rounded-full text-gray-600 cursor-pointer hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Search);
