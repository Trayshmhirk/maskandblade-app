import { cn } from "@/lib/utils";
import React from "react";

interface HeroProps {
  heroBg: string;
  children: React.ReactNode;
  heroMinHeight: string;
  overlayOpacity: string;
  className?: string;
}

function Hero({
  heroBg,
  children,
  heroMinHeight,
  overlayOpacity,
  className,
}: HeroProps) {
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
