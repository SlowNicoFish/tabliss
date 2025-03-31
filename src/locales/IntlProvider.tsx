import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the i18n instance
import { db } from "../db/state";
import { useValue } from "../lib/db/react";
import { messages } from "./locales";

const IntlProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const locale = useValue(db, "locale");

  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;

};

export default IntlProvider;
