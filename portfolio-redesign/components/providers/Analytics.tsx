"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { recordPath, trackEvent } from "@/lib/leadContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 wczytywane dopiero po zgodzie na cookies analityczne.
 * Wcześniej skrypt ładował się zawsze z zgodą wpisaną przy pierwszym renderze,
 * a next/script z tym samym id nie wykonuje się ponownie, więc kliknięcie
 * „Akceptuj” nic nie zmieniało do przeładowania strony.
 */
export function Analytics() {
  const [consent, setConsent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) recordPath(pathname);
  }, [pathname]);

  // Kliknięcie w adres e-mail to też zapytanie; liczy się tylko, gdy GA4 działa po zgodzie.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="mailto:"]');
      if (a) trackEvent("click_email", { page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

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
