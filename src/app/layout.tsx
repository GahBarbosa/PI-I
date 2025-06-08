import type { Metadata } from "next";
import { Viga, Literata } from "next/font/google";
import "./globals.css";

const viga = Viga({
  weight: '400',
  subsets: ['latin'],
});

const literata = Literata({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Painel do Projeto Integrador I",
  description: "Interface web para controle de pedidos, produtos, clientes e fornecedores.",
  authors: [
    { name: "Barbara Carvalho" },
    { name: "Gabriel Barbosa" },
    { name: "Mariana Roque" },
    { name: "Nayara Alves" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${viga.className} ${literata.className}`}>
      <body
        className={` antialiased p-0 m-0`}
      >
        {children}
      </body>
    </html>
  );
}
