import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  icon: string;
  link: string;
  alt: string;
  className?: string;
}

const SocialIcon = ({ icon, link, alt, className }: SocialIconProps) => {
  return (
    <Link
      href={link}
      className={cn(
        "rounded-full shadow-md overflow-hidden flex items-center justify-center bg-white p-0.5 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <Image
        src={icon}
        alt={alt}
        className="rounded-full object-cover w-12 h-12"
        width={48}
        height={48}
      />
    </Link>
  );
};

export default SocialIcon;
