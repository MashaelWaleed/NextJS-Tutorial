import Link from "next/dist/client/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <p>
        <Link href="/blog">Go to Blog</Link>
      </p>
      <p>
        <Link href="/about">Go to About</Link>
      </p>
      <p>
        <Link href="/profile">Go to Profile</Link>
      </p>
      <p>
        <Link href="/products">Go to Products</Link>
      </p>
      <p>
        <Link href="/docs">Go to Docs</Link>
      </p>
      <p>
        <Link href="/counter">Go to Counter</Link>
      </p>
      <p>
        <Link href="/articles/breaking-news-123?lang=en">
          Go to Breaking News EN
        </Link>
      </p>

      <p>
        <Link href="/articles/breaking-news-123?lang=fr">
          Go to Breaking News FR
        </Link>
      </p>
    </main>
  );
}
