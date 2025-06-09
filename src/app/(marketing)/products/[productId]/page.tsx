import React from "react";
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <div>Product {productId} details</div>;
};

export default ProductDetails;
