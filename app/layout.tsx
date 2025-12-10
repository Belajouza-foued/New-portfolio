import type { ReactNode } from "react";
import SideBar from "./components/SideBar";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Ton Nom",
};

export default function RootLayout({ children }: { children: ReactNode })  {
  return (
    <html lang="fr">
      <body>
               {children}
      </body>
    </html>
  );
}
