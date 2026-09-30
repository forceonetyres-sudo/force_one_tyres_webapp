import BrandPageTemplate from "@/components/BrandPageTemplate";

export const metadata = {
  title: "Accelera Tyres | Force One Tyres Dubai",
  description: "Engineered for Speed, Control, and Style. Discover Accelera Ultra High Performance, EV, SUV, and Passenger tyres at Force One Tyres Dubai.",
};

export default function AcceleraPage() {
  const brandData = {
    name: "Accelera",
    logoUrl: "/assets/Logo/accelera/Accelera_logo.png",
    logoClassName: "brightness-0 dark:invert",
    tagline: "Speed, Style, and Safety",
    description: "High-performance tires engineered for speed, control, and precision — trusted by driving enthusiasts and daily drivers alike.",
    heroImage: "/assets/accelera/Omikron A-T/Porsche Cayyene with Omikron A-T/4.jpg", 
    zigZagData: [
      {
        title: "Unmatched High-Speed Stability",
        description: "Accelera tires are designed with advanced tread compounds and structural integrity to maintain maximum grip and stability at high speeds, ensuring a safe and thrilling driving experience.",
        bullets: [
          "Advanced silica compound for superior grip",
          "Reinforced sidewalls for cornering stability",
          "Optimized tread patterns for water evacuation"
        ],
        image: "/assets/accelera/Omikron A-T/Porsche Cayyene with Omikron A-T/3.jpg" 
      },
      {
        title: "Extreme Off-Road Capabilities",
        description: "Built to conquer the toughest environments, the Desert Expedition series features an aggressive tread design and puncture-resistant construction to pull you through deep sand, mud, and jagged rocks.",
        bullets: [
          "Self-cleaning tread blocks for maximum traction",
          "Reinforced 3-ply sidewalls to prevent punctures",
          "All-terrain versatility without compromising highway comfort"
        ],
        image: "/assets/accelera/Desert Expedition/Gallery/Land Rover with Desert Expedition/IMG_7039 copy.jpg"
      }
    ],
    flagshipTyres: [
      {
        name: "IOTA EVT",
        category: "EV / Electric",
        specs: ["Optimized for EV torque", "Low rolling resistance", "Whisper-quiet ride"],
        image: "/assets/accelera/IOTA EVT/Iota EVT (A).png" 
      },
      {
        name: "ECO PLUSH",
        category: "Passenger",
        specs: ["Maximum fuel efficiency", "Comfortable daily driving", "Long tread life"],
        image: "/assets/accelera/Eco Plus/Eco Plush (A).png" 
      },
      {
        name: "OMIKRON H-T",
        category: "SUV / Highway",
        specs: ["Smooth highway cruising", "Excellent wet traction", "Reduced road noise"],
        image: "/assets/accelera/Omikron H-T/Omikron H_T (A).png" 
      },
      {
        name: "OMIKRON A-T",
        category: "SUV / All Terrain",
        specs: ["Aggressive off-road grip", "On-road comfort", "Durable sidewalls"],
        image: "/assets/accelera/Omikron A-T/OMIKRON A_T (A).png" 
      },
      {
        name: "IOTA ST68",
        category: "SUV / Performance",
        specs: ["High-speed stability", "Sporty handling", "Premium aesthetics"],
        image: "/assets/accelera/IOTA ST68/Iota ST68 (A).png" 
      },
      {
        name: "DESERT EXPEDITION",
        category: "Off-Road / 4x4",
        specs: ["Extreme off-road traction", "Puncture resistant", "Mud & sand clearing"],
        image: "/assets/accelera/Desert Expedition/Desert Expedition copy.png" 
      }
    ]
  };

  return <BrandPageTemplate brand={brandData} />;
}
