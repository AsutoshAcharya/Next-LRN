import React from "react";

const Docs = async ({
  params,
}: {
  params: Promise<{ slug: Array<string> }>;
}) => {
  const { slug } = await params;
  console.log(slug);
  return <h1>docs</h1>;
};

export default Docs;
