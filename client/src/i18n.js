import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import {
  _log
} from './utils';

const i18nextOptions = {
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  load: 'languageOnly',
  resGetPath: 'locales/__lng__/__ns__.json',
  backend: {
    // path where resources get loaded from
    loadPath: 'locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: false
  },


  // interpolation: {
  //   escapeValue: false, // not needed for react!!
  // },

  react: {
    wait: true
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(i18nextOptions, (err, t) => {
      _log('Init: i18next');
  });

export default i18n;
