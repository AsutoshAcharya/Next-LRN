"use client";

import React from "react";

const GlobalError = () => {
  return (
    //need to add this because it completely replaces root
    //works only on production build
    <html>
      <body>
        <div className="text-red-700">GlobalError Something went wrong!</div>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </body>
    </html>
  );
};

export default GlobalError;
