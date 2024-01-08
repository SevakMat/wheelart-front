import i18next from "i18next"

import global_en from "../translations/en/global.json"
import global_fr from "../translations/fr/global.json"
import home_fr from "../translations/fr/home.json"
import home_en from "../translations/en/home.json"
import { I18nextProvider } from "react-i18next"


i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("ln") ?? "en",

  resources: {
    en: {
      global: global_en,
      home: home_en
    },
    fr: {
      global: global_fr,
      home: home_fr
    }
  }
})


const I18Provider = ({ children }: any) => {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  )
}

export default I18Provider