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
  'auth.signInWithGoogle': 'Sign in with Google',
  'auth.signInWithFacebook': 'Sign in with Facebook',
  'auth.orSignInWith': 'Or sign in with',
  'auth.orSignUpWith': 'Or sign up with',
  'auth.socialText': 'You can also use your social accounts to get started',
  
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
  
  // Features Section
  'features.title': 'Features',
  'features.heading': 'Powerful Features That Save You Time',
  'features.description': 'HandSheet combines advanced AI technology with intuitive design to transform your handwritten data into perfectly formatted spreadsheets.',
  
  'features.recognition.badge': 'Intelligent Recognition',
  'features.recognition.title': 'Capture Any Handwriting Style',
  'features.recognition.description': 'Our advanced AI has been trained on millions of handwriting samples to accurately recognize even the most challenging handwriting styles, turning messy notes into clean data.',
  'features.recognition.point1': '99.8% recognition accuracy',
  'features.recognition.point2': 'Works with cursive and print handwriting',
  'features.recognition.point3': 'Supports 40+ languages',
  'features.recognition.point4': 'Preserves mathematical formulas',
  'features.recognition.cta': 'Learn about our recognition technology',
  'features.recognition.imageAlt': 'Handwriting recognition in action',
  
  'features.structure.badge': 'Smart Structure Detection',
  'features.structure.title': 'Automatic Table Organization',
  'features.structure.description': 'HandSheet intelligently identifies table structures, rows, columns, and cells from your handwritten notes, preserving the exact layout in your spreadsheets.',
  'features.structure.point1': 'Detects tables, grids, and lists automatically',
  'features.structure.point2': 'Preserves row and column relationships',
  'features.structure.point3': 'Recognizes headers and formatting',
  'features.structure.point4': 'Maintains cell merges and spans',
  'features.structure.cta': 'See structure detection in action',
  'features.structure.imageAlt': 'Table and structure detection',
  
  'features.integration.badge': 'Seamless Integration',
  'features.integration.title': 'Direct Export to Your Favorite Tools',
  'features.integration.description': 'Send your converted data directly to Excel, Google Sheets, or other spreadsheet applications with just one click. No intermediate steps required.',
  'features.integration.point1': 'One-click export to Excel and Google Sheets',
  'features.integration.point2': 'Preserves formulas and functions',
  'features.integration.point3': 'Maintains formatting and styles',
  'features.integration.point4': 'Easy sharing and collaboration options',
  'features.integration.cta': 'Explore integration options',
  'features.integration.imageAlt': 'Seamless export to spreadsheets',
  
  // CTA Section
  'cta.heading': 'Ready to Transform Your Handwritten Data?',
  'cta.description': 'Join thousands of professionals who save hours each week by automating the conversion of handwritten notes to spreadsheets.',
  'cta.point1': 'Free 14-day trial with full access to all features',
  'cta.point2': 'No credit card required to start',
  'cta.point3': 'Cancel anytime, no questions asked',
  'cta.startFreeTrial': 'Start Free Trial',
  'cta.viewPricing': 'View Pricing',
  'cta.popularBadge': 'Most Popular',
  'cta.planTitle': 'Pro Plan',
  'cta.planDescription': 'Perfect for professionals and small teams',
  'cta.planPrice': '$9.99',
  'cta.planPeriod': '/ month',
  'cta.feature1': 'Unlimited document scans',
  'cta.feature2': 'Advanced table recognition',
  'cta.feature3': 'Direct export to Excel & Google Sheets',
  'cta.feature4': 'Cloud storage for all your documents',
  'cta.feature5': 'Priority customer support',
  'cta.feature6': 'Collaboration features for teams',
  'cta.getStarted': 'Get Started',
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
  'auth.signInWithGoogle': 'Inicia sesión con Google',
  'auth.signInWithFacebook': 'Inicia sesión con Facebook',
  'auth.orSignInWith': 'O inicia sesión con',
  'auth.orSignUpWith': 'O regístrate con',
  'auth.socialText': 'También puedes usar tus cuentas sociales para iniciar sesión',
  
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
  
  // Features Section
  'features.title': 'Características',
  'features.heading': 'Potentes Características que te Ahorran Tiempo',
  'features.description': 'HandSheet combina tecnología avanzada de IA con un diseño intuitivo para transformar tus datos manuscritos en hojas de cálculo perfectamente formateadas.',
  
  'features.recognition.badge': 'Reconocimiento Inteligente',
  'features.recognition.title': 'Captura Cualquier Estilo de Escritura',
  'features.recognition.description': 'Nuestra IA avanzada ha sido entrenada con millones de muestras de escritura a mano para reconocer con precisión incluso los estilos de escritura más desafiantes, convirtiendo notas desordenadas en datos limpios.',
  'features.recognition.point1': '99.8% de precisión en el reconocimiento',
  'features.recognition.point2': 'Funciona con escritura cursiva e imprenta',
  'features.recognition.point3': 'Compatible con más de 40 idiomas',
  'features.recognition.point4': 'Preserva fórmulas matemáticas',
  'features.recognition.cta': 'Aprende sobre nuestra tecnología de reconocimiento',
  'features.recognition.imageAlt': 'Reconocimiento de escritura en acción',
  
  'features.structure.badge': 'Detección Inteligente de Estructura',
  'features.structure.title': 'Organización Automática de Tablas',
  'features.structure.description': 'HandSheet identifica de manera inteligente estructuras de tablas, filas, columnas y celdas de tus notas manuscritas, preservando la disposición exacta en tus hojas de cálculo.',
  'features.structure.point1': 'Detecta tablas, cuadrículas y listas automáticamente',
  'features.structure.point2': 'Preserva relaciones entre filas y columnas',
  'features.structure.point3': 'Reconoce encabezados y formato',
  'features.structure.point4': 'Mantiene la combinación y extensión de celdas',
  'features.structure.cta': 'Ver detección de estructura en acción',
  'features.structure.imageAlt': 'Detección de tablas y estructura',
  
  'features.integration.badge': 'Integración Perfecta',
  'features.integration.title': 'Exportación Directa a tus Herramientas Favoritas',
  'features.integration.description': 'Envía tus datos convertidos directamente a Excel, Google Sheets u otras aplicaciones de hojas de cálculo con solo un clic. No se requieren pasos intermedios.',
  'features.integration.point1': 'Exportación con un clic a Excel y Google Sheets',
  'features.integration.point2': 'Preserva fórmulas y funciones',
  'features.integration.point3': 'Mantiene el formato y los estilos',
  'features.integration.point4': 'Opciones fáciles para compartir y colaborar',
  'features.integration.cta': 'Explorar opciones de integración',
  'features.integration.imageAlt': 'Exportación perfecta a hojas de cálculo',
  
  // CTA Section
  'cta.heading': '¿Listo para Transformar tus Datos Manuscritos?',
  'cta.description': 'Únete a miles de profesionales que ahorran horas cada semana automatizando la conversión de notas manuscritas a hojas de cálculo.',
  'cta.point1': 'Prueba gratuita de 14 días con acceso completo a todas las funciones',
  'cta.point2': 'No se requiere tarjeta de crédito para comenzar',
  'cta.point3': 'Cancela en cualquier momento, sin preguntas',
  'cta.startFreeTrial': 'Iniciar Prueba Gratuita',
  'cta.viewPricing': 'Ver Precios',
  'cta.popularBadge': 'Más Popular',
  'cta.planTitle': 'Plan Pro',
  'cta.planDescription': 'Perfecto para profesionales y equipos pequeños',
  'cta.planPrice': '9,99€',
  'cta.planPeriod': '/ mes',
  'cta.feature1': 'Escaneos de documentos ilimitados',
  'cta.feature2': 'Reconocimiento avanzado de tablas',
  'cta.feature3': 'Exportación directa a Excel y Google Sheets',
  'cta.feature4': 'Almacenamiento en la nube para todos tus documentos',
  'cta.feature5': 'Soporte prioritario al cliente',
  'cta.feature6': 'Funciones de colaboración para equipos',
  'cta.getStarted': 'Comenzar Ahora',
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
