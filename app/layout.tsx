import type { ReactNode } from "react";
import "./globals.css";

import Footer from "./components/Footer"

export const metadata = {
  title: "Portfolio | Ton Nom",
};

export default function RootLayout({ children }: { children: ReactNode })  {
  return (
    <html lang="fr">
      <body  className="flex flex-col min-h-screen">
         <div className="flex">
          {/* SIDEBAR FIXE */}
         

          {/* CONTENT */}
          <main
            className="
              grid grid-col-2 md:grid-cols-1 lg:grid-1 w-full p-0
             "          >
            {children}
          </main>
                 </div>
         <Footer/>
           </body>
          </html>
  );
}
