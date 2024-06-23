import { useTranslation } from "react-i18next";

export default function App(){
  const [t, i18n] = useTranslation("global");

  function changeLanguage(lang){
    i18n.changeLanguage(lang)
}

  return (
    <div>
      <div>{t("header.hi")}</div>
      <div><button onClick={() => changeLanguage('en')}>en</button></div>
      <div><button onClick={() => changeLanguage('ar')}>ar</button></div>
    </div>
  )
}