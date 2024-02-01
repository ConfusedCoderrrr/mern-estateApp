import React from "react";
import { Link } from "react-router-dom";

function Btn({title}) {
  return (
    <div className="text-end align-middle hidden md:flex ">
    
        <button className="bg-slate-900 text-slate-200 text-lg w-24 px-3 py-2 rounded-lg hover:bg-orange-400 hover:text-slate-100 shadow-xl transition-transform transform hover:scale-105 focus:shadow-outline-blue active:scale-110 focus:outline-none focus:shadow-outline-blue active:shadow-none ">
          {title}
        </button>
    
    </div>
  );
}

export default Btn;
