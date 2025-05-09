import { Scissors, Sparkles, Zap } from "lucide-react";

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
        price: "₦15,000",
        duration: "45 mins",
        details:
          "Includes consultation, shampoo, precision cut with clippers/scissors, styling products, and finishing touches. Our barbers will work with you to create your ideal look.",
        badge: "Most Popular",
        image: "/images/services/service-signature-cut.jpg",
      },
      {
        id: 2,
        name: "Skin Fade",
        description: "Seamless gradient from skin to length",
        price: "₦18,000",
        duration: "60 mins",
        details:
          "Expert blending from skin to longer lengths with crisp line work. Choose from low, mid, or high fade styles with detailed edge work.",
        image: "/images/service1.jpg",
      },
      {
        id: 3,
        name: "Hair Design",
        description: "Custom patterns and artwork",
        price: "₦12,000+",
        duration: "30+ mins",
        details:
          "Express your style with custom designs, lines, or patterns shaved into your hair. Complexity determines final price.",
        image: "/images/services/service-hair-design.jpg",
      },
      {
        id: 8,
        name: "Afro Shape-Up",
        description: "Tapered afro sculpting and cleanup",
        price: "₦13,000",
        duration: "40 mins",
        details:
          "Perfect for maintaining an afro with sharp lines, clean tapering, and volume balance.",
        image: "/images/services/service-afro-shape.jpg",
      },
      {
        id: 9,
        name: "Kids Cut",
        description: "Age-appropriate haircut for children",
        price: "₦10,000",
        duration: "30 mins",
        details:
          "Gentle, fun, and stylish cuts for kids under 12, done with care and precision.",
        image: "/images/services/service-kids-cut.jpg",
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
        price: "₦14,000",
        duration: "30 mins",
        details:
          "Detailed beard shaping with clippers and scissors, including neckline cleanup and cheek line refinement for a sharp, defined look.",
        image: "/images/services/service-beard-sculpt.jpg",
      },
      {
        id: 5,
        name: "Royal Treatment",
        description: "Beard trim with hot towel & oils",
        price: "₦18,000",
        duration: "45 mins",
        details:
          "Full beard service including hot towel treatment, precise trimming, moisturizing oils, and skin care for your beard area.",
        image: "/images/services/service-beard-trim.jpg",
      },
      {
        id: 10,
        name: "Beard Detox",
        description: "Cleanse, exfoliate, and nourish",
        price: "₦22,000",
        duration: "35 mins",
        details:
          "Deep-clean your beard and skin beneath with charcoal wash, exfoliation, hydrating serum, and beard oil treatment.",
        image: "/images/services/service-beard-detox.jpg",
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
        price: "₦30,000",
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
        price: "₦20,000",
        duration: "45 mins",
        details:
          "Efficient haircut and beard tidy-up designed to maintain your look between full services. Includes quick style and product application.",
        image: "/images/service1.jpg",
      },
      {
        id: 11,
        name: "Grooming + Massage",
        description: "Full grooming with a 20-min shoulder massage",
        price: "₦35,000",
        duration: "100 mins",
        details:
          "Haircut and beard services followed by a relaxing in-chair massage using essential oils. Designed to ease tension and elevate your experience.",
        image: "/images/service1.jpg",
      },
      {
        id: 12,
        name: "VIP Monthly Plan",
        description: "Four home visits per month",
        price: "₦100,000",
        duration: "Custom",
        details:
          "Enjoy priority booking, a dedicated barber, and four visits per month. Perfect for professionals who need consistency and convenience.",
        badge: "Premium",
        image: "/images/service1.jpg",
      },
    ],
  },
];
