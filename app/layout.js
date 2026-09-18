import "./globals.css";

export const metadata = {
  title: "FlyRank Capstone Dashboard",
  description: "A simple production-ready dashboard for the FlyRank capstone."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}