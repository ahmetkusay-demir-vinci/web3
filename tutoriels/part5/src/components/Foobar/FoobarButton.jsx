import React, { useContext } from "react";
import { Context as LanguageContext } from "contexts/LanguageContext";

const FoobarButton = () => {
  const { language, pickLanguage } = useContext(LanguageContext);
};

export default FoobarButton;
