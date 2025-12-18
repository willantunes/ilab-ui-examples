import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option1LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option1Layout({ children, currentPage = "fluxo-geral" }: Option1LayoutProps) {
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
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      {/* Header */}
      <header class="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-blue-200/50 shadow-sm">
        <div class="max-w-full mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">
            {/* Logo */}
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <Logo />
              <div>
                <div class="text-base sm:text-lg md:text-xl font-bold text-blue-900">gralab</div>
                <div class="text-xs sm:text-sm text-blue-600">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 w-full sm:w-auto max-w-2xl order-3 sm:order-2">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Q Busca Rápida..."
                  class="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-lg text-sm sm:text-base text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                />
                <button class="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-400 hover:text-blue-600">
                  <XIcon />
                </button>
              </div>
              
              {/* Navigation - Hidden on mobile, shown on tablet+ */}
              <nav class="hidden md:flex gap-4 lg:gap-6 mt-2">
                {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                  <a href="#" class="text-xs lg:text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* User Info */}
            <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0 order-2 sm:order-3">
              <div class="relative">
                <button class="p-1.5 sm:p-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <BellIcon />
                </button>
                <span class="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center">
                  9+
                </span>
              </div>
              <div class="text-right hidden sm:block">
                <div class="text-xs sm:text-sm font-semibold text-blue-900">QA ILIBERTY</div>
                <div class="text-[10px] sm:text-xs text-blue-600">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <aside class="hidden lg:block w-64 min-h-[calc(100vh-73px)] bg-white/60 backdrop-blur-xl border-r border-blue-200/50 sticky top-[73px]">
          <div class="p-6">
            <h2 class="text-lg font-bold text-blue-900 mb-6">Fluxo Geral</h2>
            <nav class="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option1/${item.id}`}
                    class={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      item.active
                        ? "bg-blue-500/20 text-blue-900 font-semibold shadow-sm"
                        : "text-blue-700 hover:bg-blue-50/80 hover:text-blue-900"
                    }`}
                  >
                    <Icon />
                    <span class="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-8 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation - Bottom bar on mobile */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-blue-200/50 z-40">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option1/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all ${
                    item.active
                      ? "bg-blue-500/20 text-blue-900"
                      : "text-blue-700 hover:bg-blue-50/80"
                  }`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main class="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer class="hidden lg:block bg-white/60 backdrop-blur-xl border-t border-blue-200/50 py-4 px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-blue-700">
          <div class="text-center sm:text-left">Credenciado | 2025 © ILiberty</div>
          <div class="font-semibold">v2.0.0</div>
          <div class="text-center sm:text-right">Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

