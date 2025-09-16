import React, { FC, useContext, useEffect } from "react"
import "./App.css"
import "src/i18n/config"
import { useTranslation } from "react-i18next"
import { useDispatch } from 'react-redux'

import { LanguageContext } from "src/context/lang-provider/lang-provider"
import { appActions } from "src/store/app"
import AppRoutes from "./Routes"



const App: FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("title")
  }, [language])

  useDispatch()(appActions.set())

  return (
    <AppRoutes />
  )
}

export default App;
