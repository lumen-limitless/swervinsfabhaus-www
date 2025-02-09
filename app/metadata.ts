import { APP_DESCRIPTION } from "@/lib/constants"
import { type Metadata } from "next"

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Next.js Starter"

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000"
)

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: baseUrl,
  generator: "Next.js",
  keywords: [
    "Welding",
    "Fabrication",
    "Welding Fabrication",
    "Performance Exhaust",
    "Custom Exhaust",
    "Rochester NY Welding",
    "Rochester NY Fabrication",
    "Rochester NY Custom Exhaust",
    "Rochester NY Welding Fabrication",
    "Rochester NY Welding Fabrication Custom Exhaust",
    "Rochester NY Welding Fabrication Custom Exhaust Systems",
    "Rochester NY Welding Fabrication Custom Exhaust Systems Installation",
  ],

  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: "en_US",
  },

  twitter: {
    title: APP_NAME,
    creator: "@LumenLimitless",
    description: APP_DESCRIPTION,
    card: "summary_large_image",
  },

  appleWebApp: {
    statusBarStyle: "default",
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/manifest.json",
}
