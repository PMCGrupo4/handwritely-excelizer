
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // NavBar
  'nav.features': 'Features',
  'nav.howItWorks': 'How It Works',
  'nav.pricing': 'Pricing',
  'nav.signIn': 'Sign In',
  'nav.tryForFree': 'Try for Free',
  
  // Sign In/Sign Up
  'auth.welcomeBack': 'Welcome back',
  'auth.signInDescription': 'Enter your credentials to sign in to your account',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.signIn': 'Sign In',
  'auth.dontHaveAccount': 'Don\'t have an account?',
  'auth.signUp': 'Sign up',
  'auth.createAccount': 'Create an account',
  'auth.createAccountDescription': 'Enter your information to create an account',
  'auth.name': 'Name',
  'auth.confirmPassword': 'Confirm Password',
  'auth.alreadyHaveAccount': 'Already have an account?',
  'auth.back': 'Back',
  
  // Footer
  'footer.allRightsReserved': 'All rights reserved.',
  'footer.privacyPolicy': 'Privacy Policy',
  'footer.termsOfService': 'Terms of Service',
  'footer.cookiePolicy': 'Cookie Policy',
  
  // Language Switcher
  'language.english': 'English',
  'language.spanish': 'Spanish',
};

// Spanish translations
const esTranslations: Record<string, string> = {
  // NavBar
  'nav.features': 'Características',
  'nav.howItWorks': 'Cómo Funciona',
  'nav.pricing': 'Precios',
  'nav.signIn': 'Iniciar Sesión',
  'nav.tryForFree': 'Prueba Gratis',
  
  // Sign In/Sign Up
  'auth.welcomeBack': 'Bienvenido de nuevo',
  'auth.signInDescription': 'Ingresa tus credenciales para acceder a tu cuenta',
  'auth.email': 'Correo electrónico',
  'auth.password': 'Contraseña',
  'auth.signIn': 'Iniciar Sesión',
  'auth.dontHaveAccount': '¿No tienes una cuenta?',
  'auth.signUp': 'Regístrate',
  'auth.createAccount': 'Crear una cuenta',
  'auth.createAccountDescription': 'Ingresa tu información para crear una cuenta',
  'auth.name': 'Nombre',
  'auth.confirmPassword': 'Confirmar Contraseña',
  'auth.alreadyHaveAccount': '¿Ya tienes una cuenta?',
  'auth.back': 'Volver',
  
  // Footer
  'footer.allRightsReserved': 'Todos los derechos reservados.',
  'footer.privacyPolicy': 'Política de Privacidad',
  'footer.termsOfService': 'Términos de Servicio',
  'footer.cookiePolicy': 'Política de Cookies',
  
  // Language Switcher
  'language.english': 'Inglés',
  'language.spanish': 'Español',
};

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
