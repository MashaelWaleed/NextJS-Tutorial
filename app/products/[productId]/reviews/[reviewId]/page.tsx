import {notFound} from "next/navigation";
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(productId) > 1000) {
    notFound();
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
