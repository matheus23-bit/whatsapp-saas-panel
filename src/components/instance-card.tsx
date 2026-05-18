"use client";

type Props = {
  instance: {
    id: string;
    name: string;
    status: string;
    phone?: string | null;
  };
  onStart: (id: string) => Promise<void>;
  onStop: (id: string) => Promise<void>;
};

export function InstanceCard({ instance, onStart, onStop }: Props) {
  return (
    <div
      style={{
        border: "1px solid #29324e",
        borderRadius: 16,
        padding: 16,
        background: "#121a2f",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{instance.name}</h3>
      <p>Status: {instance.status}</p>
      <p>Telefone: {instance.phone ?? "-"}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onStart(instance.id)}>Iniciar</button>
        <button onClick={() => onStop(instance.id)}>Parar</button>
      </div>
    </div>
  );
}
