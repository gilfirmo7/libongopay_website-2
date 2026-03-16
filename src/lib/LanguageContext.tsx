"use client";

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Language, translations, getTranslation } from "./translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [t, setT] = useState<TranslationType>(translations.en);

  useEffect(() => {
    const savedLang = localStorage.getItem("libongo-lang") as Language;
    if (savedLang && ["en", "pt", "fr"].includes(savedLang)) {
      setLanguageState(savedLang);
      setT(getTranslation(savedLang));
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setT(getTranslation(lang));
    localStorage.setItem("libongo-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
