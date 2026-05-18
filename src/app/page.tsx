import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>WhatsApp SaaS Panel</h1>
      <p>Painel base para gerenciar clientes, instâncias e API keys.</p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/login">Entrar</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
