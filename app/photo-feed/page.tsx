import Link from "next/link";
import flowerImages from "./flowers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl text-center font-bold my-4">Photo of Flowers</h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {flowerImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover aspect-square shadow-md"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
