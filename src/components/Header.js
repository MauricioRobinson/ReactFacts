import React from "react";

function Header() {
  return (
    <nav className="bg-slate-900 h-16 text-white text-bold flex justify-between items-center px-5">
      <div>
        <h1 className="text-blue-400 font-semibold text-3xl">ReactFacts</h1>
      </div>
      <div>
        <p className="font-bold tracking-wide">First React Practice</p>
      </div>
    </nav>
  );
}

export default Header;
