import { notFound, redirect } from "next/navigation";

function getandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const randomInt = getandomInt(2);
  if (randomInt === 0) {
    throw new Error("Random error occurred!");
  }
  const { productId, reviewId } = await params;
  if (parseInt(productId) > 1000 || parseInt(reviewId) > 1000) {
    //notFound();
    redirect("/products");
  }
  return (
    <main>
      <h1>Review Detail</h1>
      <p>
        This is the detail page for review {reviewId} of product {productId}.
      </p>
    </main>
  );
}
