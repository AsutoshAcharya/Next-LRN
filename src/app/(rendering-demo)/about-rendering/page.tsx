"use client";
// import { cookies } from "next/headers";
import React, { useEffect, useState } from "react";

const AboutRenderingPage = () => {
  // const cookieStore = await cookies();
  // console.log(cookieStore.get("theme"));
  // console.log("About comp");
  const [state, setState] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return <div>AboutRenderingPage {state}</div>;
};

export default AboutRenderingPage;
