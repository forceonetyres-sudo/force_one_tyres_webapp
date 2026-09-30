import BrandPageTemplate from "@/components/BrandPageTemplate";

export const metadata = {
  title: "Gepormax Tyres | Force One Tyres Dubai",
  description: "Discover Gepormax tyres at Force One Tyres Dubai.",
};

export default function GepormaxPage() {
  const brandData = {
    name: "Gepormax",
    logoUrl: "/assets/Logo/gepormax/Gepormax.png",
    tagline: "Rugged Reliability",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: null, // Placeholder
    zigZagData: [
      {
        title: "Built for the Toughest Terrains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        bullets: [
          "Lorem ipsum dolor sit amet",
          "Consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt"
        ],
        image: null // Placeholder
      },
      {
        title: "Commercial Grade Strength",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bullets: [
          "Ut enim ad minim veniam",
          "Quis nostrud exercitation ullamco",
          "Laboris nisi ut aliquip ex ea commodo"
        ],
        image: null // Placeholder
      }
    ],
    flagshipTyres: [
      {
        name: "MUD TERRAIN M/T",
        category: "Off-Road",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "ALL TERRAIN A/T",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "HIGHWAY TERRAIN H/T",
        category: "SUV",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "VAN PRO",
        category: "Commercial",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "ECO TOURING",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "SPORT MAX",
        category: "Performance",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      }
    ]
  };

  return <BrandPageTemplate brand={brandData} />;
}
