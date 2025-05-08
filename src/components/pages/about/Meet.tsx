import { Button } from "@/components/ui/button";
import Image from "next/image";

const Meet = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="app_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Showcase barber team */}
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/barber-team.jpg" // Replace with your team image
              alt="MaskAndBlade professional barbers"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/10"></div>
          </div>

          {/* Content */}
          <div className="lg:pl-10">
            <div className="mb-2 text-sm font-semibold text-accent uppercase tracking-wider">
              Our Craftsmen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Master Barbers,{" "}
              <span className="text-accent">Unmatched Skill</span>
            </h2>

            <div className="space-y-5">
              <p className="text-lg text-gray-600 leading-relaxed">
                At MaskAndBlade, our barbers aren&apos;t just stylists -
                they&apos;re artisans trained in the perfect balance of
                traditional techniques and contemporary trends. Each team member
                brings 5+ years of professional experience to your chair.
              </p>

              <div className="p-5 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-gray-700 italic">
                  &quot;We don&apos;t just cut hair - we sculpt confidence.
                  Every client leaves our chairs not just looking better, but
                  feeling transformed.&quot;
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Rigorously trained in precision cutting, skin fades, and beard
                artistry, our team stays ahead through continuous education in
                the latest barbering innovations.
              </p>
            </div>

            <div className="mt-8">
              <Button className="px-6 py-3 bg-accent hover:bg-amber-300 text-black font-medium rounded-lg transition-colors">
                Meet The Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
