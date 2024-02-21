import React from "react";
import { Link } from "react-router-dom";

function Btn({ title, ActiveColor, UpdatedColor, width }) {
  return (
    <div className="text-end align-middle hidden md:flex w-full my-0">
      <button
        className={`text-slate-200 text-lg ${ActiveColor} w-full px-3 py-2 rounded-lg ${
          UpdatedColor ? `hover:${UpdatedColor}` : "hover:bg-blue-400"
        } hover:text-slate-100 shadow-xl transition-transform transform hover:scale-105 focus:shadow-outline-blue active:scale-110 focus:outline-none focus:shadow-outline-blue active:shadow-none `}
      >
        {title}
      </button>
    </div>
  );
}

export default Btn;
