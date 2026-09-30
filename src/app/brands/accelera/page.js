import BrandPageTemplate from "@/components/BrandPageTemplate";

export const metadata = {
  title: "Accelera Tyres | Force One Tyres Dubai",
  description: "Engineered for Speed, Control, and Style. Discover Accelera Ultra High Performance, EV, SUV, and Passenger tyres at Force One Tyres Dubai.",
};

export default function AcceleraPage() {
  const brandData = {
    name: "Accelera",
    logoUrl: "/assets/Logo/accelera/Accelera_logo.png",
    tagline: "Speed & Style",
    description: "Ultra-high performance tires designed for speed, control, and precision — trusted by driving enthusiasts worldwide.",
    heroImage: null, // Placeholder
    zigZagData: [
      {
        title: "Unmatched High-Speed Stability",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        bullets: [
          "Lorem ipsum dolor sit amet",
          "Consectetur adipiscing elit",
          "Sed do eiusmod tempor incididunt"
        ],
        image: null // Placeholder
      },
      {
        title: "Innovative EV Technology",
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
        name: "IOTA EVT",
        category: "EV / Electric",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "ECO PLUSH",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "OMIKRON H/T",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "PHI-R",
        category: "Performance",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "IOTA ST68",
        category: "SUV / 4x4",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      },
      {
        name: "ALPHA-01",
        category: "Passenger",
        specs: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
        image: null // Placeholder
      }
    ]
  };

  return <BrandPageTemplate brand={brandData} />;
}
