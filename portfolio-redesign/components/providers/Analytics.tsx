"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 z consent management — odpala dopiero po zgodzie cookie.
 * Domyślnie 'denied', po akceptacji eventu 'consent-granted' przełącza
 * na 'granted'.
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

  if (!GA_ID) return null;

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
            'analytics_storage': '${consent ? "granted" : "denied"}',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            send_page_view: ${consent}
          });
        `}
      </Script>
    </>
  );
}
