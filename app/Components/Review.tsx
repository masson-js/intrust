"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

const REVIEW_IMAGES = [
  "review1.jpeg",
  "review2.jpeg",
  "review3.jpeg",
  "review4.jpeg",
  "review5.jpeg",
  "review6.jpeg",
  "review7.jpeg",
  "review8.jpeg",
  "review9.jpeg",
  "review10.jpeg",
  // Добавьте все имена файлов отзывов
];

export default function Review({ translations, language }: any) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  return (
    <section
      id="reviews"
      className="w-full max-w-full lg:max-w-[66.67%] mx-auto my-4 px-4 sm:px-6 lg:px-8 mb-12"
    >
      <div className="bg-[#DBB697] py-2 px-6 rounded-t-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          {translations[language].review.title}
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {REVIEW_IMAGES.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            style={{ minWidth: "300px", maxWidth: "400px" }}
          >
            <Image
              src={`/reviews/${image}`}
              alt={`Customer review ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
              quality={90}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
