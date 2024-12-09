import { ReactNode } from "react";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { LatoFont } from "@/styles/fonts";
import { ViewTransitions } from "next-view-transitions";
import CustomButton from "@/components/custom-button";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:url": "",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:title": "",
    "og:description": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${LatoFont.className} p-4`}>
          <Link href="/">
            <CustomButton />
          </Link>
          <br />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
