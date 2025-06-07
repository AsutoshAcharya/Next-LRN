import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} for {productId}
    </h1>
  );
};

export default ReviewDetails;
