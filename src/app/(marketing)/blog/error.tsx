"use client";
import React from "react";

const BlogErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <div className="text-red-600 text-center">{error.message}</div>;
};

export default BlogErrorBoundary;
