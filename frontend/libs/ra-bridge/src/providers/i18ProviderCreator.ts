import polyglotI18nProvider from 'ra-i18n-polyglot';
import { I18nProvider, TranslationMessages } from 'react-admin';

interface I18nProviderCreatorProps {
  locales: {
    he: TranslationMessages;
    en: () => Promise<{ default: TranslationMessages }>;
  };
}

type I18nProviderCreator = (props: I18nProviderCreatorProps) => I18nProvider;

export const i18nProviderCreator: I18nProviderCreator = ({ locales }) => {
  return polyglotI18nProvider((locale) => {
    if (locale === 'en') {
      document.dir = 'ltr';
      return locales.en().then((messages) => messages.default);
    }

    // Always fallback on hebrew
    document.dir = 'rtl';
    return locales.he;
  }, 'he');
};
