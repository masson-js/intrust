"use client";

export default function Uslugi({ translations, language }: any) {
  const { pobyt, citizenship, translation, documents, other } =
    translations[language].uslugi;

  return (
    <section
      id="services"
      className="w-full max-w-full lg:max-w-[66.67%] mx-auto my-4 px-4 sm:px-6 lg:px-8 mb-12"
    >
      <div className="bg-[#DBB697] py-2 px-6 mb-6 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          {translations[language].services}
        </h2>
      </div>

      <div className="space-y-4">
        {/* Pobyt Section */}
        <div className="flex flex-col bg-[#e6e6e6] rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#DBB697]">
            <h3 className="text-lg sm:text-xl font-bold text-center">
              {pobyt.name}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 p-2">
            {pobyt.items.map((item: any, itemIndex: any) => (
              <div
                key={itemIndex}
                className="flex flex-col justify-between p-4 text-center rounded-md min-h-[80px]"
                style={{
                  backgroundColor: "#EDEDED",
                }}
              >
                <span className="text-gray-800 text-xs sm:text-sm break-words hyphens-auto">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white bg-[#1A2F58] py-1  mt-2 rounded-xl">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Citizenship Section */}
        <div className="flex flex-col bg-[#e6e6e6] rounded-lg overflow-hidden">
          <div className="px-6 py-2 bg-[#DBB697]">
            <h3 className="text-lg sm:text-xl font-bold text-center">
              {citizenship.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-2 p-2 w-full">
            <div className="flex flex-col justify-between p-4 text-center rounded-md bg-[#EDEDED] min-h-[80px] w-full">
              <span className="text-gray-800 text-xs sm:text-sm break-words hyphens-auto">
                {citizenship.name}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white bg-[#1A2F58] rounded-xl mt-2 py-1">
                {citizenship.price}
              </span>
            </div>
          </div>
        </div>

        {/* Translation Section */}
        <div className="flex flex-col bg-[#e6e6e6] rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#DBB697]">
            <h3 className="text-lg sm:text-xl font-bold text-center">
              {translation.name}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 p-2">
            {translation.items.map((item: any, itemIndex: any) => (
              <div
                key={itemIndex}
                className="flex flex-col justify-between p-4 text-center rounded-md min-h-[80px]"
                style={{
                  backgroundColor: "#EDEDED",
                }}
              >
                <span className="text-gray-800 text-xs sm:text-sm break-words hyphens-auto">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white bg-[#1A2F58] rounded-xl mt-2  py-1">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="flex flex-col bg-[#e6e6e6] rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#DBB697]">
            <h3 className="text-lg sm:text-xl font-bold text-center">
              {documents.name}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 p-2 w-full">
            {documents.items.map((item: any, itemIndex: any) => (
              <div
                key={itemIndex}
                className="flex flex-col justify-between p-4 text-center rounded-md min-h-[80px] w-full"
                style={{
                  backgroundColor: "#EDEDED",
                }}
              >
                <span className="text-gray-800 text-xs sm:text-sm break-words hyphens-auto">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white bg-[#1A2F58] rounded-xl mt-2  py-1">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div className="flex flex-col bg-[#e6e6e6] rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-[#DBB697]">
            <h3 className="text-lg sm:text-xl font-bold text-center">
              {other.name}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 p-2 w-full">
            {other.items.map((item: any, itemIndex: any) => (
              <div
                key={itemIndex}
                className="flex flex-col justify-between p-4 text-center rounded-md min-h-[80px] w-full"
                style={{
                  backgroundColor: "#EDEDED",
                }}
              >
                <span className="text-gray-800 text-xs sm:text-sm break-words hyphens-auto">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white bg-[#1A2F58] rounded-xl mt-2  py-1">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
