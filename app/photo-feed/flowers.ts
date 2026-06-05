import { StaticImageData } from "next/image";
import photo1 from "./photos/aglaonema_silver_bay.jpg";
import photo2 from "./photos/anthurium.jpg";
import photo3 from "./photos/begonia_rex.jpg";
import photo4 from "./photos/bird_of_paradise.jpg";
import photo5 from "./photos/croton_petra.jpg";
import photo6 from "./photos/money_tree.jpg";
import photo7 from "./photos/orchid_phalaenopsis.jpg";

export type FlowerImage = {
  id: number;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const flowerImages: FlowerImage[] = [
  {
    id: 1,
    name: "Aglaonema Silver Bay",
    src: photo1,
    photographer: "John Doe",
    location: "Garden A",
  },
  {
    id: 2,
    name: "Anthurium",
    src: photo2,
    photographer: "Jane Smith",
    location: "Garden B",
  },
  {
    id: 3,
    name: "Begonia Rex",
    src: photo3,
    photographer: "Bob Johnson",
    location: "Garden C",
  },
  {
    id: 4,
    name: "Bird of Paradise",
    src: photo4,
    photographer: "Alice Brown",
    location: "Garden D",
  },
  {
    id: 5,
    name: "Croton Petra",
    src: photo5,
    photographer: "Charlie Davis",
    location: "Garden E",
  },
  {
    id: 6,
    name: "Money Tree",
    src: photo6,
    photographer: "Emily Wilson",
    location: "Garden F",
  },
  {
    id: 7,
    name: "Orchid Phalaenopsis",
    src: photo7,
    photographer: "David Lee",
    location: "Garden G",
  },
];
export default flowerImages;
