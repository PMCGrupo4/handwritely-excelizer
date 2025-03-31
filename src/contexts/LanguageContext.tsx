
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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
  'language.switchTo': 'Switch to',
  
  // Hero Section
  'hero.tagline': 'Handwriting to Spreadsheet Revolution',
  'hero.title': 'Transform Your Handwritten Notes Into Spreadsheet Data',
  'hero.description': 'HandSheet instantly converts your handwritten notes, lists, and tables into perfectly formatted spreadsheets. Save hours of manual data entry with our AI-powered solution.',
  'hero.startFreeTrial': 'Start Free Trial',
  'hero.watchDemo': 'Watch Demo',
  'hero.feature1': 'Handwriting Recognition',
  'hero.feature1Description': 'Advanced AI recognizes even the messiest handwriting with incredible accuracy.',
  'hero.feature2': 'Table Structure Detection',
  'hero.feature2Description': 'Automatically identifies tables, rows, and columns in your handwritten notes.',
  'hero.feature3': 'Direct Sheet Export',
  'hero.feature3Description': 'Export directly to Excel or Google Sheets with formatting intact.',
  
  // Process Section
  'process.title': 'How It Works',
  'process.subtitle': 'From Paper to Spreadsheet in 4 Simple Steps',
  'process.description': 'HandSheet makes the process of converting handwritten notes to spreadsheet data quick and effortless.',
  'process.step1': 'Capture Your Notes',
  'process.step1Description': 'Take a picture of your handwritten notes, lists, or tables with your smartphone or upload an existing image.',
  'process.step2': 'AI Processing',
  'process.step2Description': 'Our advanced AI analyzes your handwriting, recognizes text, and identifies table structures automatically.',
  'process.step3': 'Review & Edit',
  'process.step3Description': 'Verify the converted data and make any necessary adjustments in our intuitive editor.',
  'process.step4': 'Export & Share',
  'process.step4Description': 'Export directly to Excel or Google Sheets with a single click, ready to use immediately.',
  'process.cta': 'Try HandSheet Now',
  'process.ctaSubtext': 'No credit card required. Start converting your handwritten notes today.',
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
  'language.switchTo': 'Cambiar a',
  
  // Hero Section
  'hero.tagline': 'Revolución de Escritura a Hoja de Cálculo',
  'hero.title': 'Transforma tus Notas Manuscritas en Datos de Hoja de Cálculo',
  'hero.description': 'HandSheet convierte instantáneamente tus notas manuscritas, listas y tablas en hojas de cálculo perfectamente formateadas. Ahorra horas de entrada manual de datos con nuestra solución impulsada por IA.',
  'hero.startFreeTrial': 'Comenzar Prueba Gratuita',
  'hero.watchDemo': 'Ver Demostración',
  'hero.feature1': 'Reconocimiento de Escritura',
  'hero.feature1Description': 'IA avanzada reconoce incluso la escritura más desordenada con precisión increíble.',
  'hero.feature2': 'Detección de Estructura de Tablas',
  'hero.feature2Description': 'Identifica automáticamente tablas, filas y columnas en tus notas manuscritas.',
  'hero.feature3': 'Exportación Directa',
  'hero.feature3Description': 'Exporta directamente a Excel o Google Sheets con el formato intacto.',
  
  // Process Section
  'process.title': 'Cómo Funciona',
  'process.subtitle': 'Del Papel a la Hoja de Cálculo en 4 Pasos Simples',
  'process.description': 'HandSheet hace que el proceso de convertir notas manuscritas en datos de hoja de cálculo sea rápido y sin esfuerzo.',
  'process.step1': 'Captura tus Notas',
  'process.step1Description': 'Toma una foto de tus notas manuscritas, listas o tablas con tu smartphone o sube una imagen existente.',
  'process.step2': 'Procesamiento IA',
  'process.step2Description': 'Nuestra IA avanzada analiza tu escritura, reconoce texto e identifica estructuras de tablas automáticamente.',
  'process.step3': 'Revisar y Editar',
  'process.step3Description': 'Verifica los datos convertidos y realiza los ajustes necesarios en nuestro editor intuitivo.',
  'process.step4': 'Exportar y Compartir',
  'process.step4Description': 'Exporta directamente a Excel o Google Sheets con un solo clic, listo para usar inmediatamente.',
  'process.cta': 'Prueba HandSheet Ahora',
  'process.ctaSubtext': 'No se requiere tarjeta de crédito. Comienza a convertir tus notas manuscritas hoy.',
};

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the stored language preference from localStorage
    const storedLanguage = localStorage.getItem('language') as Language;
    return storedLanguage && (storedLanguage === 'en' || storedLanguage === 'es') 
      ? storedLanguage 
      : 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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
