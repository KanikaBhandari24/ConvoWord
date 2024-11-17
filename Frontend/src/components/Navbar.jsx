import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 md:px-40 shadow-lg h-20 content-center fixed bg-pink-400 text-white">
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold font-serif hover:text-pink-700 cursor-default">ConvoWord</h1>
            <h2 className="text-xl cursor-pointer font-bold font-serif hover:text-pink-700">Home</h2>
        </div>
      </div>
    </>
  );
};
export default Navbar;