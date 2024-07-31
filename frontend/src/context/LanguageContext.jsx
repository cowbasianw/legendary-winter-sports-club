import React, { createContext, useState, useContext } from 'react';

// Create Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'EN' ? 'CN' : 'EN'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom Hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);