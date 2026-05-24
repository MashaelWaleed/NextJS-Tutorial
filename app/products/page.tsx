import Link from "next/dist/client/link";

export default function ProductList() {
  const id =100;
  return (
    <main>
      <h1>Product List</h1>
      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>
      <h2><Link href="/products/3" replace>Product 3</Link></h2>
      <h2><Link href={`/products/${id}`} replace>Product {id}</Link></h2>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
