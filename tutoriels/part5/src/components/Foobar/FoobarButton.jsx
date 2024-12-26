import React, { useContext } from "react";
import { Context as LanguageContext } from "contexts/LanguageContext";

const FoobarButton = () => {
  const { language, pickLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => pickLanguage(language === "fr" ? "en" : "fr")}>
        Switch Language
      </button>
    </div>
  );
};

export default FoobarButton;