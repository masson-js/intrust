import Image from "next/image";

export default function Intro({ translations, language }: any) {
  return (
    <section
      
      className="relative w-full bg-white overflow-hidden px-4 py-10"
      style={{
        backgroundImage: "url('/whitehands.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      }}
    >
      {/* Контент поверх */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-6">
        {/* Текст */}
        <div className="text-center font-serif  leading-relaxed text-black p-2">
          <p>
            {translations[language].intro.GoodDay}
            <br />
            {translations[language].intro.MyNameis}{" "}
            <strong>{translations[language].intro.name}</strong>,{" "}
            {translations[language].intro.Iam}
            <strong>{translations[language].intro.specialization}</strong>.
          </p>
        </div>

        {/* Фото */}
        <div className="w-40 h-40 overflow-hidden rounded-full shadow-md border-2 border-white">
          <Image
            src="/aniaAboutImage.png"
            alt="aniaAboutImage"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
