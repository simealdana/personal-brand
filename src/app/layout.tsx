import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DOMAIN = "https://sime.dev";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Sime.dev - Digital Product Consulting",
    template: "%s | Sime.dev",
  },
  description:
    "Simeon is a digital product consultant specialized in building AI agents, SaaS solutions, and custom apps. Let's create your next big product together!",
  keywords: [
    "AI agent",
    "digital product",
    "consulting",
    "Simeon",
    "Sime.dev",
    "SaaS",
    "custom apps",
  ],
  authors: [{ name: "Simeon", url: DOMAIN }],
  openGraph: {
    title: "Sime.dev - Digital Product Consulting",
    description:
      "Simeon is a digital product consultant specialized in building AI agents, SaaS solutions, and custom apps. Let's create your next big product together!",
    url: DOMAIN,
    siteName: "Sime.dev",
    images: [
      {
        url: `${DOMAIN}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sime.dev - Digital Product Consulting",
    description:
      "Simeon is a digital product consultant specialized in building AI agents, SaaS solutions, and custom apps. Let's create your next big product together!",
    images: [`${DOMAIN}/og-image.jpg`],
    creator: "@tuUsuarioTwitter", // opcional
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: DOMAIN,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K93WQLGJ');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FHXXMQZTG1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FHXXMQZTG1');
          `}
        </Script>
        {/* ElevenLabs Convai Widget Script */}
        <Script
          src="https://elevenlabs.io/convai-widget/index.js"
          strategy="afterInteractive"
        />
        <style>
          {`
            /* Custom styles for ElevenLabs Convai Widget */
            elevenlabs-convai {
              --elevenlabs-convai-bottom: 80px !important;
              --elevenlabs-convai-right: 20px !important;
            }
            
            @media (max-width: 768px) {
              elevenlabs-convai {
                --elevenlabs-convai-bottom: 100px !important;
                --elevenlabs-convai-right: 10px !important;
                --elevenlabs-convai-size: 50px !important;
              }
              
              .hide-on-download-mobile elevenlabs-convai {
                display: none !important;
              }
            }
            
            .hide-on-tree elevenlabs-convai {
              display: none !important;
            }
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K93WQLGJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        {/* ElevenLabs Convai Widget with conditional display */}
        <div id="convai-widget-container">
          <Script id="convai-widget-controller" strategy="afterInteractive">
            {`
              // Función para verificar si estamos en una página de descarga y aplicar la clase cuando sea necesario
              function updateConvaiWidgetVisibility() {
                const path = window.location.pathname;
                const container = document.getElementById('convai-widget-container');
                if (container) {
                  // Verificar si estamos en la ruta /download/[id]
                  if (path.match(/\\/download\\/[^\\/]+$/)) {
                    container.className = 'hide-on-download-mobile';
                  } 
                  // Verificar si estamos en la ruta /tree
                  else if (path === '/tree') {
                    container.className = 'hide-on-tree';
                  } 
                  else {
                    container.className = '';
                  }
                }
              }
              
              // Ejecutar al cargar la página
              updateConvaiWidgetVisibility();
              
              // También manejar cambios en la navegación del lado del cliente (para SPA)
              if (typeof window !== 'undefined') {
                window.addEventListener('popstate', updateConvaiWidgetVisibility);
              }
            `}
          </Script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<elevenlabs-convai agent-id="jJEt1YiA5kzfg53OLDMD"></elevenlabs-convai>',
            }}
          />
        </div>
      </body>
    </html>
  );
}
