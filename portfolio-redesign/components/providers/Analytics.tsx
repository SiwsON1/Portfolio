"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 wczytywane dopiero po zgodzie na cookies analityczne.
 * Wcześniej skrypt ładował się zawsze z zgodą wpisaną przy pierwszym renderze,
 * a next/script z tym samym id nie wykonuje się ponownie, więc kliknięcie
 * „Akceptuj” nic nie zmieniało do przeładowania strony.
 */
export function Analytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("cookie-consent");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.level === "all") setConsent(true);
      } catch {}
    }
    const onGranted = () => setConsent(true);
    window.addEventListener("consent-granted", onGranted);
    return () => window.removeEventListener("consent-granted", onGranted);
  }, []);

  if (!GA_ID || !consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'granted',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
