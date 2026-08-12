import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Force One Tyres | Premium EV & Standard Tyres in Dubai",
  description:
    "Expert tyre fitting, alignment, and balancing in Ras Al Khor. Explore our premium range of EV and non-EV tyres from top global brands.",
  keywords: [
    "tyres Dubai",
    "EV tyres",
    "wheel alignment Dubai",
    "tyre fitting Ras Al Khor",
    "Force One Tyres",
    "premium tyres UAE",
  ],
  openGraph: {
    title: "Force One Tyres | Premium EV & Standard Tyres in Dubai",
    description:
      "Expert tyre fitting, alignment, and balancing in Ras Al Khor. Explore our premium range of EV and non-EV tyres.",
    url: "https://forceonetyre.com",
    siteName: "Force One Tyres",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Force One Tyres | Premium EV & Standard Tyres in Dubai",
    description:
      "Expert tyre fitting, alignment, and balancing in Ras Al Khor, Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-charcoal-950 text-white">
        {children}
      </body>
    </html>
  );
}
