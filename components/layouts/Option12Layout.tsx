import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option12LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option12Layout({ children, currentPage = "fluxo-geral" }: Option12LayoutProps) {
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
    <div class="min-h-screen bg-[#0d0d0d] text-white">
      {/* Command Bar at Top */}
      <div class="bg-[#1a1a1a] border-b border-[#2a2a2a] px-3 sm:px-4 py-2">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Logo />
            <div>
              <div class="text-xs sm:text-sm font-semibold text-white">gralab</div>
              <div class="text-[10px] sm:text-xs text-gray-400">DIAGNOSTICOS</div>
            </div>
          </div>
          <div class="flex-1 w-full sm:w-auto max-w-md order-3 sm:order-2">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Command palette (⌘K)..."
                class="w-full pl-10 pr-4 py-1.5 bg-[#0d0d0d] border border-[#2a2a2a] rounded text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4a4a4a]"
              />
            </div>
          </div>
          <nav class="hidden md:flex items-center gap-4 lg:gap-6 order-2 sm:order-3">
            {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
              <a href="#" class="text-xs lg:text-sm text-gray-400 hover:text-white font-medium">
                {item}
              </a>
            ))}
          </nav>
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0 order-2 sm:order-4">
            <div class="relative">
              <button class="p-1.5 sm:p-2 text-gray-400 hover:text-white">
                <BellIcon />
              </button>
              <span class="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center">
                9+
              </span>
            </div>
            <div class="hidden sm:block text-xs sm:text-sm font-medium text-white">QA ILIBERTY</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row">
        {/* Left Sidebar - Linear Style - Hidden on mobile */}
        <aside class="hidden lg:flex w-16 bg-[#1a1a1a] border-r border-[#2a2a2a] min-h-[calc(100vh-48px)] py-4">
          <nav class="flex flex-col items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option12/${item.id}`}
                  class={`p-3 rounded-lg transition-colors ${
                    item.active
                      ? "bg-[#2a2a2a] text-white"
                      : "text-gray-500 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                  title={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Right Sidebar - Context Menu - Hidden on mobile */}
        <aside class="hidden lg:block w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] min-h-[calc(100vh-48px)] p-4">
          <div class="mb-6">
            <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Fluxo Geral</div>
            <div class="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option12/${item.id}`}
                    class={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-[#2a2a2a] text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-[#2a2a2a] z-40">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option12/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-colors ${
                    item.active
                      ? "bg-[#2a2a2a] text-white"
                      : "text-gray-500 hover:bg-[#2a2a2a] hover:text-white"
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
        <main class="flex-1 bg-[#0d0d0d] p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-[#1a1a1a] border-t border-[#2a2a2a] px-6 py-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-500">
          <div>Credenciado | 2025 © ILiberty</div>
          <div class="font-semibold text-white">v2.0.0</div>
          <div>Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

