export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
              Plataforma SaaS para WhatsApp
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Gerencie instâncias, QR Code, APIs e clientes em um só painel
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Crie instâncias, conecte números, gere API keys e entregue integração
              de WhatsApp para seus clientes com um painel moderno e pronto para crescer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/dashboard"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Abrir painel
              </a>
              <a
                href="/login"
                className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Entrar
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>Instâncias em tempo real</span>
              <span>API pública por cliente</span>
              <span>Estrutura pronta para escalar</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Visão geral</p>
                  <h2 className="text-2xl font-semibold">WhatsApp SaaS Panel</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">
                  Online
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Clientes</p>
                  <h3 className="mt-2 text-3xl font-bold">24</h3>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Instâncias</p>
                  <h3 className="mt-2 text-3xl font-bold">58</h3>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">APIs ativas</p>
                  <h3 className="mt-2 text-3xl font-bold">41</h3>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Mensagens hoje</p>
                  <h3 className="mt-2 text-3xl font-bold">12.4k</h3>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Status do sistema</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Painel web</span>
                    <span className="text-emerald-400">Operacional</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">API</span>
                    <span className="text-yellow-400">Em implantação</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Engine WhatsApp</span>
                    <span className="text-yellow-400">Aguardando integração</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Gerenciamento de instâncias</h3>
            <p className="mt-3 text-slate-400">
              Crie, inicie, pare e monitore múltiplas conexões de WhatsApp em um painel central.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">API para seus clientes</h3>
            <p className="mt-3 text-slate-400">
              Gere chaves de acesso e entregue integração pronta para aplicativos externos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Escalável e profissional</h3>
            <p className="mt-3 text-slate-400">
              Estrutura pensada para SaaS, com evolução para webhooks, logs, planos e automações.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
