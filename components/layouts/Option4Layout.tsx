import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option4LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option4Layout({ children, currentPage = "fluxo-geral" }: Option4LayoutProps) {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon, active: currentPage === "estoque" },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon, active: currentPage === "cadastro" },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon, active: currentPage === "comprovante" },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon, active: currentPage === "laudos" },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon, active: currentPage === "financeiro" },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon, active: currentPage === "empresa" },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon, active: currentPage === "ocorrencias" },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon, active: currentPage === "treinamentos" },
  ];

  return (
    <div class="min-h-screen bg-gray-900">
      {/* Header */}
      <header class="sticky top-0 z-50 bg-gray-800 border-b-2 border-cyan-500 shadow-lg shadow-cyan-500/20">
        <div class="max-w-full mx-auto px-6 py-4">
          <div class="flex items-center justify-between gap-6">
            {/* Logo */}
            <div class="flex items-center gap-3">
              <div class="bg-cyan-500/20 p-2 rounded-lg border border-cyan-500/30">
                <Logo />
              </div>
              <div>
                <div class="text-xl font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">gralab</div>
                <div class="text-sm text-cyan-300">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 max-w-2xl">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Q Busca Rápida..."
                  class="w-full pl-10 pr-10 py-2.5 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-lg shadow-cyan-500/10"
                />
                <button class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-cyan-400">
                  <XIcon />
                </button>
              </div>
              
              {/* Navigation */}
              <nav class="flex gap-6 mt-2">
                {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                  <a href="#" class="text-sm text-gray-300 hover:text-cyan-400 font-semibold transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-1">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* User Info */}
            <div class="flex items-center gap-4">
              <div class="relative">
                <button class="p-2 text-cyan-400 hover:text-cyan-300 transition-colors bg-gray-800 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
                  <BellIcon />
                </button>
                <span class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 ring-2 ring-gray-900">
                  9+
                </span>
              </div>
              <div class="text-right bg-gray-800 border border-cyan-500/30 px-4 py-2 rounded-lg">
                <div class="text-sm font-bold text-cyan-400">QA ILIBERTY</div>
                <div class="text-xs text-gray-400">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex">
        {/* Sidebar */}
        <aside class="w-64 min-h-screen bg-gray-800 border-r-2 border-cyan-500 shadow-xl shadow-cyan-500/10 sticky top-[73px]">
          <div class="p-6">
            <h2 class="text-xl font-bold text-cyan-400 mb-6 pb-3 border-b-2 border-cyan-500/30 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">Fluxo Geral</h2>
            <nav class="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option4/${item.id}`}
                    class={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      item.active
                        ? "bg-cyan-500 text-gray-900 font-bold shadow-lg shadow-cyan-500/50 transform scale-105 border border-cyan-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                    }`}
                  >
                    <Icon />
                    <span class="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-8 px-4 py-3 bg-cyan-500 text-gray-900 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:scale-105 border border-cyan-400">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main class="flex-1 p-8 bg-gray-900">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-gray-800 border-t-2 border-cyan-500 shadow-lg shadow-cyan-500/20 py-4 px-8">
        <div class="flex items-center justify-between text-sm text-gray-300">
          <div class="font-semibold">Credenciado | 2025 © ILiberty</div>
          <div class="font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">v2.0.0</div>
          <div class="font-semibold">Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

