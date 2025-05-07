// lib/utils/getHeroImage.ts
import { nav_config } from "@/lib/data/nav-config";

export function getHeroImage(pathname: string): string {
  const entry = nav_config.find((item) => item.href === pathname);
  if (!entry || !entry.images.length) return "/images/home-hero-bg.jpg";

  const todayIndex = new Date().getDate() % entry.images.length;
  return entry.images[todayIndex];
}
