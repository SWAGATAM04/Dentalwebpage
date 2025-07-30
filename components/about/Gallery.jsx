import React from "react";
import Image from "next/image";

const GallerySection = () => {
  return (
    <section className="p-6 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Image 1 - Portrait */}
        <div className="relative w-full h-64  md:h-90">
          <Image
            src="/gallery-hospital/revital-office-1.jpg"
            alt="Dental office 1"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 2 - Portrait */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/revital-office-2.jpg"
            alt="Dental office 2"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 3 - Landscape */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/revital-office-3.jpg"
            alt="Dental office 3"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 4 - Landscape */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/revital-office-4.jpg"
            alt="Dental office 4"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 5 - Portrait */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/revital-office-5.jpg"
            alt="Dental office 5"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 6 - Landscape */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/revital-office-6.jpg"
            alt="Dental office 6"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 7 - Portrait */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/Revital-Staff2-scaled.jpg"
            alt="Dental office 7"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>

        {/* Image 8 - Landscape */}
        <div className="relative w-full h-64 md:h-90">
          <Image
            src="/gallery-hospital/Revital-Staff-scaled.jpg"
            alt="Dental office 8"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
