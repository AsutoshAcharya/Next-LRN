"use client";
import React from "react";

const BlogErrorBoundary = ({ error }: { error: Error }) => {
  return <div className="text-red-600 text-center">{error.message}</div>;
};

export default BlogErrorBoundary;
