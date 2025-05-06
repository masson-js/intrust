"use client";

import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Uslugi from "./Components/Uslugi";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Review from "./Components/Review";
import Contact from "./Components/Contact";

export default function Home() {
  const [language, setLanguage] = useState("rus");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const rusResponse = await fetch("/languages/rus.json");
        const polishResponse = await fetch("/languages/polish.json");

        if (!rusResponse.ok || !polishResponse.ok) {
          throw new Error("Ошибка загрузки файлов переводов");
        }

        const rus = await rusResponse.json();
        const polish = await polishResponse.json();

        setTranslations({ rus, polish });
      } catch (error) {
        console.error("Ошибка при загрузке переводов:", error);
      }
    };

    loadTranslations();
  }, []);

  if (Object.keys(translations).length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <main className="flex flex-col w-full max-w-full min-h-screen">
      <Header
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />
      <Intro translations={translations} language={language} />
      <Uslugi translations={translations} language={language} />
      <AboutMe translations={translations} language={language} />
      <Review translations={translations} language={language}/>
      <Contact translations={translations} language={language}/>
      {/* <Portfolio translations={translations} language={language} /> */}
      {/* <Contact translations={translations} language={language} /> */}
      <Footer />

    </main>
  );
}
