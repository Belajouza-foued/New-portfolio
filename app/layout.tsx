import type { ReactNode } from "react";
import "./globals.css";
import SideBar from "./components/SideBar";

export const metadata = {
  title: "Portfolio | Ton Nom",
};

export default function RootLayout({ children }: { children: ReactNode })  {
  return (
    <html lang="fr">
      <body  className="flex flex-col min-h-screen">
         <div className="flex">
          {/* SIDEBAR FIXE */}
          <aside className="hiden sidebar md:flex md:w-1/4 lg:w-1/5 p-5 bg-white shadow-md flex flex-col items-center md:items-start fixed h-screen">
            <SideBar />
          </aside>

          {/* CONTENT */}
          <main
            className="
              grid grid-col-2 md:grid-cols-1 lg:grid-1 w-full p-0
             "
          >
            {children}
          </main>
        </div>
        
           </body>
          </html>
  );
}
