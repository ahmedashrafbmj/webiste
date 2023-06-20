import React, { Suspense, useEffect } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "public/app/css/fontawesome-pro.css";
import "@/styles/index-four.scss";
import "@/styles/main.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/64914622cc26a871b023913a/1h3bnjudg';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);
  
    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Suspense>
      <Component {...pageProps} />
    </Suspense>
  );
}
