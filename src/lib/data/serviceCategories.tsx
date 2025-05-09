import { Scissors, Sparkles, Zap } from "lucide-react";

// Enhanced service data with categories and icons
export const serviceCategories = [
  {
    id: "hair",
    name: "Hair Services",
    icon: <Scissors className="h-5 w-5" />,
    services: [
      {
        id: 1,
        name: "Signature Cut",
        description: "Precision haircut with personalized styling",
        price: "$35",
        duration: "45 mins",
        details:
          "Includes consultation, shampoo, precision cut with clippers/scissors, styling products, and finishing touches. Our barbers will work with you to create your ideal look.",
        badge: "Most Popular",
        image: "/images/service1.jpg",
      },
      {
        id: 2,
        name: "Skin Fade",
        description: "Seamless gradient from skin to length",
        price: "$45",
        duration: "60 mins",
        details:
          "Expert blending from skin to longer lengths with crisp line work. Choose from low, mid, or high fade styles with detailed edge work.",
        image: "/images/service1.jpg",
      },
      {
        id: 3,
        name: "Hair Design",
        description: "Custom patterns and artwork",
        price: "$25+",
        duration: "30+ mins",
        details:
          "Express your style with custom designs, lines, or patterns shaved into your hair. Complexity determines final price.",
        image: "/images/service1.jpg",
      },
    ],
  },
  {
    id: "beard",
    name: "Beard Services",
    icon: <Sparkles className="h-5 w-5" />,
    services: [
      {
        id: 4,
        name: "Beard Sculpt",
        description: "Precision shaping and trimming",
        price: "$30",
        duration: "30 mins",
        details:
          "Detailed beard shaping with clippers and scissors, including neckline cleanup and cheek line refinement for a sharp, defined look.",
        image: "/images/service1.jpg",
      },
      {
        id: 5,
        name: "Royal Treatment",
        description: "Beard trim with hot towel & oils",
        price: "$40",
        duration: "45 mins",
        details:
          "Full beard service including hot towel treatment, precise trimming, moisturizing oils, and skin care for your beard area.",
        image: "/images/service1.jpg",
      },
    ],
  },
  {
    id: "premium",
    name: "Premium Packages",
    icon: <Zap className="h-5 w-5" />,
    services: [
      {
        id: 6,
        name: "The Works",
        description: "Complete head-to-chin service",
        price: "$75",
        duration: "90 mins",
        details:
          "Our ultimate package: haircut with fade, beard sculpt, hot towel treatment, straight razor edge cleanup, and premium styling products.",
        badge: "Best Value",
        image: "/images/service1.jpg",
      },
      {
        id: 7,
        name: "Executive Refresh",
        description: "Quick maintenance for busy professionals",
        price: "$50",
        duration: "45 mins",
        details:
          "Efficient haircut and beard tidy-up designed to maintain your look between full services. Includes quick style and product application.",
        image: "/images/service1.jpg",
      },
    ],
  },
];
