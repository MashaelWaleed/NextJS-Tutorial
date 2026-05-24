import Link from "next/dist/client/link";

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team.',
};

export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>This is the about page of our Next.js application.</p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}