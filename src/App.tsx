import React from 'react';
import { ToastContainer } from 'react-toastify';
import RoutersContainer from './routers/RoutersContainer';
import 'react-toastify/dist/ReactToastify.css';

import global_en from "./translations/en/global.json"
import global_fr from "./translations/fr/global.json"
// import i18next from 'i18next';
// import { I18nextProvider } from 'react-i18next';

// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: "en",
//   resources: {
//     en: {
//       global: global_en
//     },
//     fr: {
//       global: global_fr
//     }
//   }
// })



function App() {
  return (
    // <I18nextProvider i18n={i18next}>
    <>
      <RoutersContainer />
      <ToastContainer />
    </>
    // </I18nextProvider>
  );
}

export default App;
