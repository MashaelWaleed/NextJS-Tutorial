import Link from "next/dist/client/link";

export default function Profile() {
  return (
    <main>
      <h1>Profile</h1>
      <p>This is the profile page of our Next.js application.</p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}