export const metadata = {
  title: "Cycle Wellness App",
  description: "A cycle tracking and wellness dashboard converted into a Vercel-ready Next.js app.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
