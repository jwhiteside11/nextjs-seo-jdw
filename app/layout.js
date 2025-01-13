import "./_styles/globals.scss";
import "./_styles/Home.scss";
import "./_styles/ExamplePage.scss";
import "./_components/Header.scss";
import "./_components/Footer.scss";
import "./_components/Hero.scss";
import "./_components/FullWidthTextElem.scss";
import "./_components/SplitSectionLeft.scss";
import "./_components/SmallCard.scss";
import "./_components/LargeCard.scss";
import "./_components/LargeCardSection.scss";
import "./_components/SmallCardSection.scss";
import { Rajdhani, Raleway, Maven_Pro } from "next/font/google"
import Head from "next/head";

// Utilize AI font pairing to generate set of fonts
// https://fontjoy.com/

const fdisplay = Rajdhani({
  subsets: ['latin'],
  style: ['normal'],
  weight: ["400", "600"],
  variable: "--font-display"
});

const fcaption = Raleway({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: "--font-caption"
});

const ftext = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "600", "700", "800"],
  variable: "--font-text"
});

// Meta content for SEO
const title = process.env.APP_TITLE;
const description = process.env.APP_DESC;
const keywords = process.env.APP_KEYWORDS;
const thumbnail = process.env.APP_THUMBNAIL;
const PROD_URL = process.env.APP_PROD_URL;

// Built-in nextjs metadata
export const metadata = {
  metadataBase: new URL(PROD_URL),
  title,
  description,
  keywords,
  alternates: {
    canonical: PROD_URL
  },
  openGraph: {
    title,
    description,
    url: PROD_URL,
    images: [
      {
        url: thumbnail,
        secureUrl: thumbnail,
        width: 192,
        height: 192,
        alt: title,
      },
    ],
    type: "website",
    siteName: title,
  },
  icons: {
    rel: 'icon',
    url: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Generate JSON-LD for SEO -> https://webcode.tools/structured-data-generator/ */}
      <body className={`${fdisplay.variable} ${fcaption.variable} ${ftext.variable}`}>
        {children}
      </body>
    </html>
  );
}
