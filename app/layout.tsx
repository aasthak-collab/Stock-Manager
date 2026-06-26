import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import LanguageProvider from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "Stock Manager",
  description: "Construction Materials ERP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <LanguageProvider>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Topbar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}