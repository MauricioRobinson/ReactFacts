import React from "react";

function Header(props) {
  // let toggleMode = document.getElementById("toogleMode");
  // function toggleSwitch(e) {
  //   let target = e.target;
  //   console.log(target);
  // }
  // toggleMode.addEventListener("click", toggleSwitch);

  return (
    <nav
      className={`h-16 text-bold flex justify-between items-center px-5 shadow-md ${
        props.darkMode ? "bg-slate-900" : ""
      }`}>
      <div>
        <h1 className="text-blue-400 font-semibold text-3xl">ReactFacts</h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span
          className={`font-semibold text-xs ${
            props.darkMode ? "text-white" : "text-slate-900"
          }`}>
          Light
        </span>
        <div
          id="toogleMode"
          className={`w-6 h-3 rounded-md cursor-pointer ${
            props.darkMode ? "bg-slate-100" : "bg-slate-900"
          }`}
          onClick={props.toggleDarkMode}>
          <div
            className={`w-3 h-3 rounded-full ${
              props.darkMode
                ? "bg-slate-900 transition duration-500 ease-in-out translate-x-3"
                : "transition duration-500 ease-in-out bg-slate-100"
            }`}></div>
        </div>
        <span
          className={`font-semibold text-xs ${
            props.darkMode ? "text-white" : "text-slate-900"
          }`}>
          Dark
        </span>
      </div>
    </nav>
  );
}

export default Header;
