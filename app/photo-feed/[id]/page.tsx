import Image from "next/image";
import flowerImages, { FlowerImage } from "../flowers";

export default async function PhotoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: FlowerImage = flowerImages.find((p) => p.id === parseInt(id))!;
  return (
    <div className="container mx-auto my-10">
      <div>
        <div className="mx-auto w-1/2">
          <h1>{photo.name}</h1>
        </div>
        <Image
          src={photo.src}
          alt={photo.name}
          className="w-full h-auto object-cover aspect-square shadow-md"
        />
        <div className="bg-white py-4 shadow-md ">
          <p>
            <strong>Photographer:</strong> {photo.photographer}
          </p>
          <p>
            <strong>Location:</strong> {photo.location}
          </p>
        </div>
      </div>
    </div>
  );
}
