"use client";

export default function AboutMe({ translations, language }: any) {
  return (
    <section
      id="aboutMe"
      className="w-full max-w-full lg:max-w-[66.67%] mx-auto my-4 px-4 sm:px-6 lg:px-8 mb-12"
    >
      {/* Заголовок */}
      <div className="bg-[#DBB697] py-2 px-6 rounded-t-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          {translations[language].aboutMe.title}
        </h2>
      </div>
      
      {/* Основной контейнер */}
      <div className="relative w-full min-h-[300px] sm:min-h-[700px]">
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/portrait.jpg')",
            backgroundPosition: "center center",
          }}
        />
        
        {/* Текстовый контейнер - в верхнем левом углу на десктопе */}
        <div className="absolute inset-0 z-10 flex md:justify-start md:items-start justify-center items-center p-4">
          <div className="bg-[#e9e9e9af] rounded-2xl p-4 lg:p-6 w-full max-w-2xl md:m-6 sm:w-90">
            <div className="flex flex-col gap-4 font-serif text-black text-xs lg:text-base">
              <p className="text-justify">
                {translations[language].aboutMe.text1}
              </p>
              <p className="text-justify">
                {translations[language].aboutMe.text2}
              </p>
              <p className="text-justify">
                {translations[language].aboutMe.text3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}