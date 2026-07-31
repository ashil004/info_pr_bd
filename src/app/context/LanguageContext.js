"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

import { translations } from './localeData';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('infopr-lang');
    if (savedLang) {
      setLang(savedLang);
    }
    setIsMounted(true);
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('infopr-lang', newLang);
  };

  // Safe dot notation translator: t('Header.home')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations['en'];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if translation key is missing
        let fallback = translations['en'];
        for (const fk of keys) {
          fallback = fallback ? fallback[fk] : null;
        }
        return fallback || path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};