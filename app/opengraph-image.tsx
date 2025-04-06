// default opengraph image, if separate twitter image is required, add a twitter-image.tsx file

import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Swervin's Fab Haus - Custom Welding & Fabrication"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #111111, #1c1c1c)",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          {/* Logo Placeholder - using text for simplicity */}
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 30,
              padding: "10px 30px",
              border: "2px solid rgba(132, 75, 157, 0.8)", // Purple border similar to the accent color
              borderRadius: "8px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            SWERVIN'S FAB HAUS
          </div>
          
          {/* Main Heading */}
          <h1
            style={{
              fontSize: 56,
              fontWeight: "bold",
              marginBottom: 20,
              color: "white",
              maxWidth: "80%",
              lineHeight: 1.2,
            }}
          >
            PRECISION WELDING & FABRICATION
          </h1>
          
          {/* Subheading */}
          <p
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "70%",
              marginBottom: 30,
            }}
          >
            Custom metal fabrication solutions for your unique needs
          </p>
          
          {/* Bottom accent bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "12px",
              background: "linear-gradient(to right, #844b9d, #61367a)",
            }}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
