import Link from "next/dist/client/link";

export const metadata = {
  title: {
    default: "Blog",
  },
  description: 'The blog page of our Next.js application',
};

export default function Blog() {
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