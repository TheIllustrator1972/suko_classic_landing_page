import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {
  appData,
  openGraphMetadata,
  twitterMetadata,
} from "./common/constants";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"], // optional: choose weights you need
});

export const metadata: Metadata = {
  title: appData.name,
  description: appData.description,
  icons: {
    icon: "/AppLogo/AppLogo.png",
  },
  openGraph: openGraphMetadata,
  twitter: twitterMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GoogleAnalyticsId = "G-B28R21DJWJ";
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GoogleAnalyticsId}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
