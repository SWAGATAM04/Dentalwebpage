// components/GoogleTranslateScripts.tsx
'use client'

import Script from 'next/script'

export default function GoogleTranslateScripts() {
  return (
    <>
      <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
      <Script src="/assets/translation.js" strategy="beforeInteractive" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
        strategy="afterInteractive"
      />
    </>
  );
}
