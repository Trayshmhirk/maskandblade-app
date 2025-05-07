"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { getHeroImage } from "@/lib/data/get-hero-image";
import { usePathname } from "next/navigation";

interface HeroProps {
  children: React.ReactNode;
  heroMinHeight: string;
  overlayOpacity: string;
  className?: string;
}

function Hero({
  children,
  heroMinHeight,
  overlayOpacity,
  className,
}: HeroProps) {
  const pathname = usePathname();
  const heroBg = getHeroImage(pathname);

  const style = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: `fixed`,
    height: "100%",
    width: "100%",
  };

  return (
    <section
      style={style}
      className={cn("relative flex items-center", heroMinHeight, className)}
    >
      <div className="app_container z-10">{children}</div>

      <div
        className={`absolute top-0 left-0 w-full h-full ${overlayOpacity}`}
      />
    </section>
  );
}

export default Hero;
