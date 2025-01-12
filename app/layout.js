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
import { Rubik, Mulish, Nunito } from "next/font/google"

const rubik = Rubik({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ["400", "600"],
  variable: "--font-rubik"
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ["400", "600", "800", "1000"],
  variable: "--font-mulish"
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito"
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
        width: 197,
        height: 197,
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
      <Head>
        {/* Generate JSON-LD for SEO -> https://webcode.tools/structured-data-generator/ */}
      </Head>
      <body className={`${rubik.variable} ${mulish.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
