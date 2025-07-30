"use client";

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) languageValue = sp[2];
    }

    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    if (languageValue) setCurrentLanguage(languageValue);

    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) return null;

  const switchLanguage = (lang) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  return (
    <div className="text-center notranslate flex flex-col items-center space-y-2">
      {languageConfig.languages.map((ld, i) => (
        <span key={`l_s_${ld.name}`} className="">
          {currentLanguage === ld.name ? (
            <span className="text-orange-400">{ld.title}</span>
          ) : (
            <a
              onClick={switchLanguage(ld.name)}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {ld.title}
            </a>
          )}
        </span>
      ))}
    </div>
  );
};

export { LanguageSwitcher };
