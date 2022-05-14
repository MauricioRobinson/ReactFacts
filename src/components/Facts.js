import React from "react";

function Facts() {
  return (
    <main className="p-10 mt-16">
      <h2 className="text-white font-bold text-4xl">Fun facts about React</h2>
      <ul className="text-blue-300 list-disc pl-14 mt-10 text-lg">
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
