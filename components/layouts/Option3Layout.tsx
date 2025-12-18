import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option3LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option3Layout({ children, currentPage = "fluxo-geral" }: Option3LayoutProps) {
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
    <div class="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <header class="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl border-b-4 border-blue-400">
        <div class="max-w-full mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">
            {/* Logo */}
            <div class="flex items-center gap-3">
              <div class="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Logo />
              </div>
              <div>
                <div class="text-xl font-bold text-white drop-shadow-lg">gralab</div>
                <div class="text-sm text-blue-100">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 max-w-2xl">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-200">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Q Busca Rápida..."
                  class="w-full pl-10 pr-10 py-2.5 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all shadow-lg"
                />
                <button class="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-100 hover:text-white">
                  <XIcon />
                </button>
              </div>
              
              {/* Navigation */}
              <nav class="flex gap-6 mt-2">
                {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                  <a href="#" class="text-sm text-white hover:text-blue-100 font-semibold transition-colors drop-shadow-md border-b-2 border-transparent hover:border-white/50 pb-1">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* User Info */}
            <div class="flex items-center gap-4">
              <div class="relative">
                <button class="p-2 text-white hover:text-blue-100 transition-colors bg-white/20 backdrop-blur-sm rounded-lg">
                  <BellIcon />
                </button>
                <span class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-xl ring-2 ring-white">
                  9+
                </span>
              </div>
              <div class="text-right bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div class="text-sm font-bold text-white drop-shadow-md">QA ILIBERTY</div>
                <div class="text-xs text-blue-100">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside class="hidden lg:block w-64 min-h-[calc(100vh-73px)] bg-gradient-to-b from-blue-700 to-blue-800 shadow-2xl border-r-4 border-blue-400 sticky top-[73px]">
          <div class="p-6">
            <h2 class="text-xl font-bold text-white mb-6 pb-3 border-b-2 border-white/20 drop-shadow-lg">Fluxo Geral</h2>
            <nav class="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option3/${item.id}`}
                    class={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all shadow-lg ${
                      item.active
                        ? "bg-gradient-to-r from-white to-blue-100 text-blue-900 font-bold shadow-xl transform scale-105"
                        : "text-white hover:bg-white/20 hover:shadow-xl backdrop-blur-sm"
                    }`}
                  >
                    <Icon />
                    <span class="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-8 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-white/20">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 border-t-4 border-blue-400 z-40 shadow-2xl">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option3/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all ${
                    item.active
                      ? "bg-white/30 text-white"
                      : "text-white/80 hover:bg-white/20"
                  }`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight text-white">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main class="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl border-t-4 border-blue-400 py-4 px-8">
        <div class="flex items-center justify-between text-sm text-white">
          <div class="font-semibold drop-shadow-md">Credenciado | 2025 © ILiberty</div>
          <div class="font-bold text-lg">v2.0.0</div>
          <div class="font-semibold drop-shadow-md">Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

