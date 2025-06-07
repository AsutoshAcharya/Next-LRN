import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-red-300">
      <h1 className="font-bold text-2xl">Page not found</h1>
      <h2>Could not find requested page</h2>
    </div>
  );
};

export default NotFound;
