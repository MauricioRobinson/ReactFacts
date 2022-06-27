import React from "react";

function Facts(props) {
  return (
    <main
      className={
        props.darkMode ? "p-10 h-screen bg-slate-900" : "p-10 h-screen"
      }>
      <h2
        className={
          props.darkMode
            ? "font-bold text-4xl text-white"
            : "font-bold text-4xl"
        }>
        Fun facts about React
      </h2>
      <ul
        className={
          props.darkMode
            ? "list-disc pl-14 mt-10 text-lg text-white"
            : "list-disc pl-14 mt-10 text-lg"
        }>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>
          Power thousands of enterprise apps, startups and mobile applications
        </li>
      </ul>
    </main>
  );
}

export default Facts;
