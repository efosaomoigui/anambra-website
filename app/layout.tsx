// app/layout.tsx
import "../styles/globals.css";
import { Instrument_Sans } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { setupWorker } from "msw/browser";
import { handlers } from "@/mocks/handlers";
import BackArrow from "@/components/BackArrow";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

// This ensures MSW starts in development mode
// if (process.env.NODE_ENV === "development") {
//   const worker = setupWorker(...handlers);
//   worker.start();
// }

export const metadata = {
  title: {
    default: "Anambra State Government",
    template: "%s | Anambra State Government",
  },
  description: "Official platform for the Anambra State Government",
  metadataBase: new URL("https://anambrastate.gov.ng/"),
  openGraph: {
    title: "Anambra State Government",
    description: "Empowering citizens through digital access",
    siteName: "Anambra State Government",
    type: "website",
    locale: "en_NG",
    url: "https://anambrastate.gov.ng/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-instrument text-body bg-background min-h-screen flex flex-col">
        <Navbar />
        <BackArrow />
        <main className="flex-grow px-4 sm:px-6 md:px-8 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
