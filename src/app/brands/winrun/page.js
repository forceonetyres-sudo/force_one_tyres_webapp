import BrandPageTemplate from "@/components/BrandPageTemplate";

export const metadata = {
  title: "Winrun Tyres | Force One Tyres Dubai",
  description: "Discover Winrun tyres at Force One Tyres Dubai.",
};

export default function WinrunPage() {
  const brandData = {
    name: "Winrun",
    logoUrl: "/assets/Logo/winrun/Winrun_logo.png",
    tagline: "Performance Meets Value",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heroImage: null, // Placeholder
    zigZagData: [
      {
        title: "Advanced Tread Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        bullets: [
          "Lorem ipsum dolor sit amet",
          "Consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt"
        ],
        image: null // Placeholder
      },
      {
        title: "All-Season Durability",
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
        name: "R330",
        category: "Performance",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "MAXCLAW H/T",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "KF770",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "R380",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "WR12",
        category: "Commercial",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "MAXCLAW A/T",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      }
    ]
  };

  return <BrandPageTemplate brand={brandData} />;
}
