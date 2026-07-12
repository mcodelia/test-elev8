import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elev8 | Estudio creativo digital",
  description:
    "Elev8 construye marcas, sitios web y experiencias digitales para negocios ambiciosos.",
  metadataBase: new URL("https://test-elev8.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Elev8 | Estudio creativo digital",
    description:
      "Estrategia, marca, web, automatización y experiencia física bajo una misma dirección.",
    url: "/",
    siteName: "Elev8",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Elev8 | Estudio creativo digital",
    description:
      "Estrategia, marca, web, automatización y experiencia física bajo una misma dirección.",
  },
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
              "if(location.pathname==='/en'||location.pathname.startsWith('/en/')){document.documentElement.lang='en';document.documentElement.classList.add('lang-pending');}",
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
