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
    <html lang="en">
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
      </body>
    </html>
  );
}
