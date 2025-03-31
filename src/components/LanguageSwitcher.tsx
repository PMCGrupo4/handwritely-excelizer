
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      toast.success(
        newLanguage === 'en' 
          ? 'Language changed to English' 
          : 'Idioma cambiado a Español'
      );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full flex items-center justify-center w-10 h-10">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
          {t('language.switchTo')}:
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className={`w-4 h-4 rounded-full flex items-center justify-center ${language === 'en' ? 'bg-primary text-primary-foreground font-bold' : ''}`}>
            {language === 'en' && '✓'}
          </span>
          <span className={language === 'en' ? 'font-medium' : ''}>
            {t('language.english')}
          </span>
          <span className="text-xs text-muted-foreground ml-auto">EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('es')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className={`w-4 h-4 rounded-full flex items-center justify-center ${language === 'es' ? 'bg-primary text-primary-foreground font-bold' : ''}`}>
            {language === 'es' && '✓'}
          </span>
          <span className={language === 'es' ? 'font-medium' : ''}>
            {t('language.spanish')}
          </span>
          <span className="text-xs text-muted-foreground ml-auto">ES</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
