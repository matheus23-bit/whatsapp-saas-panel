import type { ReactNode } from "react";

export const metadata = {
  title: "WhatsApp SaaS Panel",
  description: "Painel para gerenciar instâncias WhatsApp",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0b1020",
          color: "#f5f7fb",
        }}
      >
        {children}
      </body>
    </html>
  );
}
