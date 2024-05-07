import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "iPlayMusic - App",
  description: "Spotify Mock Up",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
