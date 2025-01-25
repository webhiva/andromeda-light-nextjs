"use client";

import config from "@config/config.json";
import Script from 'next/script';
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import "../styles/style.scss";





export default function RootLayout({ children }) {

  return (
    <html suppressHydrationWarning={true} lang="fa">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href={config.site.favicon} />
      </head>

      
      <body suppressHydrationWarning={true}>
        {/* <TwSizeIndicator /> */}
        <Header />
        {children}
        <Footer />

         
        {/* ابزار چت */}
        <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){
                var i="mzQip3",a=window,d=document;
                function g(){
                  var g=d.createElement("script"),
                  s="https://www.goftino.com/widget/"+i,
                  l=localStorage.getItem("goftino_"+i);
                  g.async=!0;
                  g.src=l?s+"?o="+l:s;
                  d.getElementsByTagName("head")[0].appendChild(g);
                }
                "complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);
              }();
            `,
          }}
        />
      </body>
    </html>
  );
}
