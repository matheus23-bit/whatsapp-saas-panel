"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";
import { InstanceCard } from "../../components/instance-card";

type Instance = {
  id: string;
  name: string;
  status: string;
  phone?: string | null;
};

export default function DashboardPage() {
  const [instances, setInstances] = useState<Instance[]>([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function load() {
    try {
      const data = await apiFetch<Instance[]>("/instances");
      setInstances(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function createInstance() {
    await apiFetch("/instances", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    setName("");
    await load();
  }

  async function startInstance(id: string) {
    await apiFetch(`/instances/${id}/start`, { method: "POST" });
    await load();
  }

  async function stopInstance(id: string) {
    await apiFetch(`/instances/${id}/stop`, { method: "POST" });
    await load();
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Dashboard</h1>
      <p>Crie instâncias, ligue a conexão e gere API keys na API.</p>

      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da instância"
        />
        <button onClick={createInstance}>Criar</button>
      </div>

      {error ? <p style={{ color: "#ff8787" }}>{error}</p> : null}

      <div style={{ display: "grid", gap: 12 }}>
        {instances.map((instance) => (
          <InstanceCard
            key={instance.id}
            instance={instance}
            onStart={startInstance}
            onStop={stopInstance}
          />
        ))}
      </div>
    </main>
  );
}
