"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-center self-center items-center flex-col min-h-screen px-6 ">
      <Image
        src="/404-main.svg"
        alt="404 image"
        width={450}
        height={300}
        className="h-[300] object-cover"
      />
      {/* <Image
        src="/404.svg"
        alt="404 image"
        width={550}
        height={400}
        // className="w-full h-[400] object-cover"
      /> */}
      <p className="text-amber-500 text-2xl py-5 text-center">
        Oops, this page is not found
      </p>

      <p className="text-center text-sm pb-9 max-w-[70ch]">
        It looks like you are looking for a particular page, We are sorry
        it&apos;s not available now you can navigate back to the homepage by
        clicking the button below
      </p>

      {/* <Image src="/404-people.webp" alt="404 people" width={489} height={269} /> */}

      <Button
        onClick={handleGoBack}
        role="link"
        className="h-fit bg-accent hover:bg-amber-300 text-black py-3 px-7 font-semibold text-sm mt-9"
      >
        Back Home
      </Button>
    </div>
  );
};

export default NotFound;
