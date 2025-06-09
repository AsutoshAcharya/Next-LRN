import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
const Home = () => {
  return (
    <div className="w-screen h-full bg-red-300">
      <Navbar />
      <h1>Welcome home</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/articles"}>Article</Link>
      {/* <button onClick={() => router.push("/docs")}>docs</button> */}
    </div>
  );
};

export default Home;
