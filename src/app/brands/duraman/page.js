import BrandPageTemplate from "@/components/BrandPageTemplate";

export const metadata = {
  title: "Duraman Tyres | Force One Tyres Dubai",
  description: "Discover Duraman tyres at Force One Tyres Dubai.",
};

export default function DuramanPage() {
  const brandData = {
    name: "Duraman",
    logoUrl: "/assets/Logo/duraman/Duraman.svg",
    tagline: "Endurance & Safety",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: null, // Placeholder
    zigZagData: [
      {
        title: "Engineered for Long Life",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        bullets: [
          "Lorem ipsum dolor sit amet",
          "Consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt"
        ],
        image: null // Placeholder
      },
      {
        title: "All-Weather Confidence",
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
        name: "DURA-SPORT",
        category: "Performance",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "DURA-MILE",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "DURA-TRAK A/T",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "DURA-HAUL",
        category: "Commercial",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "DURA-GRIP EV",
        category: "EV / Electric",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "DURA-WINTER",
        category: "All Season",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      }
    ]
  };

  return <BrandPageTemplate brand={brandData} />;
}
