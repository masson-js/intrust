"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact({ translations, language }: any) {
  // Функция для определения нужных ссылок на основе типа контакта
  const getContactLink = (type: string, value: string) => {
    switch (type) {
      case "tel":
        return `tel:${value}`;
      case "telegram":
        return `https://t.me/${value.replace("@", "")}`;
      case "email":
        return `mailto:${value}`;
      case "instagram":
        return `https://instagram.com/${value.replace("@", "")}`;
      default:
        return "#";
    }
  };

  return (
    <section
      id="contacts"
      className="w-full max-w-full lg:max-w-[66.67%] mx-auto my-4 px-4 sm:px-6 lg:px-8 mb-2"
    >
      <div className="bg-[#DBB697] py-2 px-6 rounded-t-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          {translations[language].contact.title}
        </h2>
      </div>
      <div className="flex flex-col items-center bg-[#e6e6e6] mb-20 pb-8 rounded-b-lg">
        <p className="text-xl sm:text-2xl font-light text-center mt-4 bg-">
          {translations[language].contact.workTime}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 w-full">
          {/* Телефон */}
          <Link
            href={getContactLink(
              "tel",
              translations[language].contact.telValue ||
                translations[language].contact.tel
            )}
            className="contact-circle hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src="/icons/phone.png"
              alt="phone"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-base font-bold">
              {translations[language].contact.tel}
            </p>
          </Link>

          {/* Телеграм */}
          <Link
            href={getContactLink(
              "telegram",
              translations[language].contact.telegramValue ||
                translations[language].contact.telegram
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src="/icons/telegram.png"
              alt="telegram"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-base font-bold">
              {translations[language].contact.telegram}
            </p>
          </Link>

          {/* Email */}
          <Link
            href={getContactLink(
              "email",
              translations[language].contact.emailValue ||
                translations[language].contact.email
            )}
            className="contact-circle hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src="/icons/email.png"
              alt="email"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-base font-bold">
              {translations[language].contact.email}
            </p>
          </Link>

          {/* Instagram */}
          <Link
            href={getContactLink(
              "instagram",
              translations[language].contact.instagramValue ||
                translations[language].contact.instagram
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-circle hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src="/icons/insta.png"
              alt="instagram"
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-base font-bold">
              {translations[language].contact.instagram}
            </p>
          </Link>
        </div>

        {/* Стили для кружков */}
        <style jsx global>{`
          .contact-circle {
            background-color: #ccccccc1;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </div>
    </section>
  );
}
