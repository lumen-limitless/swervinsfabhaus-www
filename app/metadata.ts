import { APP_DESCRIPTION } from "@/lib/constants"
import { type Metadata } from "next"

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Next.js Starter"

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
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
    "Swervin's Fab Haus",
    "Metal Fabrication Rochester NY",
    "Custom Welding Services Farmington",
    "TIG Welding Rochester",
    "MIG Welding Rochester",
    "Custom Metal Fabrication Rochester NY",
    "Industrial Welding Services Rochester",
    "Architectural Metal Fabrication Rochester",
    "Metal Repairs Rochester NY",
    "Custom Metal Work Rochester",
    "Prototype Development Rochester NY",
    "Stainless Steel Fabrication Rochester",
    "Aluminum Welding Rochester NY",
    "Steel Fabrication Rochester",
    "Custom Railings Rochester NY",
    "Metal Staircases Rochester",
    "Welding Shop Near Me",
    "Best Welding Services Rochester NY",
    "Commercial Welding Farmington NY",
    "Residential Metal Fabrication Rochester",
    "Custom Metal Solutions Rochester NY",
    "Certified Welders Rochester",
    "Precision Welding Rochester NY",
    "Metal Fabrication Quotes Rochester",
    "Emergency Welding Repairs Rochester NY",
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
