import "../globals.css";

export const metadata = {
  title: "Cycle Wellness App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
