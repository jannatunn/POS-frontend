import React from "react";
import { Link } from "react-router-dom";

function Tr({ label, link }) {
  return (
    <ul className="w-52 divide-y border border-gray-200 ">
      <li className="px-3 py-1.5 text-sm hover:bg-green-200">
        <Link to={link} className="capitalize  ">
          {label}
        </Link>
      </li>
    </ul>
  );
}

export default Tr;
