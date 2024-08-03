"use client";
import { SessionProvider } from "next-auth/react";
import { CssBaseline } from "@mui/material"; // If you're using MUI for styling

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProvider>
          <CssBaseline />{" "}
          {/* Optional: Ensure Material-UI styles are applied */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
