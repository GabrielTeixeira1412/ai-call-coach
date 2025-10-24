import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Call Coach",
  description: "Simulator, Feedback, Manager-Insights",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
