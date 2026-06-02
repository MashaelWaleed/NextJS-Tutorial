import Link from "next/dist/client/link";

export const metadata = {
  title: {
    default: "Blog",
  },
  description: "The blog page of our Next.js application",
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  return (
    <main>
      <h1>Blog</h1>
      <p>This is the blog page of our Next.js application.</p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
