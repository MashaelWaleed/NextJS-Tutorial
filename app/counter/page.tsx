import Link from "next/dist/client/link";
import Counter from "./counter";
export const metadata = {
  title: "Counter",
  description: "A simple counter component",
};

export default function CounterPage() {
  return (
    <>
      <Counter />
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}
