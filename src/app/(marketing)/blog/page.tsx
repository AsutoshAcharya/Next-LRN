import React from "react";

const Blog = async () => {
  await new Promise((res) => setTimeout(() => res("Intentional"), 2000));
  // throw new Error("Error loading review");
  return <div>My blog</div>;
};

export default Blog;
