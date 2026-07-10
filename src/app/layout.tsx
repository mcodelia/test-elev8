import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elev8 | Estudio creativo digital",
  description:
    "Elev8 construye marcas, sitios web y experiencias digitales para negocios ambiciosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(location.pathname==='/en'||location.pathname.startsWith('/en/'))document.documentElement.classList.add('lang-pending');",
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
