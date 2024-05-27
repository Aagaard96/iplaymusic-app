import "./globals.css";
import SessionWrapper from "@/components/sessionWrapper";

export const metadata = {
  title: "iPlayMusic - App",
  description: "Spotify Mock Up",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className="dark">
          {children}
        </body>
      </html>
    </SessionWrapper>

  );
}
