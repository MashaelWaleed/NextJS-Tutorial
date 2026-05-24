import Link from "next/dist/client/link";

type ProductDetailProps = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: ProductDetailProps) => {
  const productId = (await params).productId;
  const title= await new Promise((resolve)=>{
    setTimeout(() => {
      resolve(`Iphone ${productId} Detail`);
    }, 100);
  })
  return {
    title: `${title}`,
  };
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const productId = (await params).productId;
  return (
    <main>
      <h1>Product Detail</h1>
      <p>This is the detail page for product {productId}.</p>
       <Link href="/products">Back to Product List</Link>
    </main>
  );
}
