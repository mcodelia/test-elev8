import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elev8 | Creative Digital Studio",
  description:
    "Elev8 construye marcas, sitios web y experiencias digitales para negocios ambiciosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
