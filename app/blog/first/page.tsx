export const metadata = {
  title: {
    default: 'First',
  },
  description: 'The first blog post of our Next.js application',
};

export default function FirstBlog() {
  return (
    <main>
      <h1>First Blog Post</h1>
      <p>This is the first blog post of our Next.js application.</p>
    </main>
  );
}