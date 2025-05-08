import Image from "next/image";

const Story = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="app_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-2 text-sm font-semibold text-accent uppercase tracking-wider">
              Our Heritage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Crafting Legends,{" "}
              <span className="text-accent">One Cut at a Time</span>
            </h2>

            <div className="space-y-5">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2023, MaskAndBlade emerged from a simple vision: to
                redefine men&apos;s grooming by blending old-world barbering
                traditions with contemporary style. What began as a single chair
                in Lagos has grown into Nigeria&apos;s most sought-after
                barbering experience.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our name reflects our philosophy - the &quot;Mask&quot;
                represents the transformative power of a great cut, while the
                &quot;Blade&quot; symbolizes the precision of our craft. Every
                service is an opportunity to unveil your best self.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, our team of master barbers continues this legacy,
                combining technical excellence with personalized service to help
                clients look and feel their absolute best.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-accent"></div>
              <span className="text-sm font-medium text-gray-500">
                EST. 2023 • LAGOS, NIGERIA
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/barber-story.jpg" // Update with your image path
              alt="MaskAndBlade barber at work"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
