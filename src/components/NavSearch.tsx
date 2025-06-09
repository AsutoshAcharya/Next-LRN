"use client";
import React, { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      NavSearch
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default NavSearch;
