import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option11LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option11Layout({ children, currentPage = "fluxo-geral" }: Option11LayoutProps) {
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
    <div class="min-h-screen bg-white">
      {/* Minimal Top Bar */}
      <header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <Logo />
            <div>
              <div class="text-lg font-semibold text-gray-900">gralab</div>
              <div class="text-xs text-gray-500">DIAGNOSTICOS</div>
            </div>
          </div>

          <div class="flex-1 max-w-xl mx-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Busca Rápida... (⌘K)"
                class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white"
              />
            </div>
          </div>

          <div class="flex items-center gap-4">
            <nav class="hidden md:flex items-center gap-6">
              {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900 font-medium">
                  {item}
                </a>
              ))}
            </nav>
            <div class="relative">
              <button class="p-2 text-gray-600 hover:text-gray-900">
                <BellIcon />
              </button>
              <span class="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                9+
              </span>
            </div>
            <div class="text-sm font-medium text-gray-900">QA ILIBERTY</div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Notion Style - Hidden on mobile */}
        <aside class="hidden lg:block w-64 bg-gray-50 border-r border-gray-200 min-h-[calc(100vh-64px)] p-4">
          <div class="mb-6">
            <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Fluxo Geral</div>
            <div class="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option11/${item.id}`}
                    class={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
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
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-sm">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option11/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-md transition-colors ${
                    item.active
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight font-medium">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Main Content - Card Grid Style */}
        <main class="flex-1 p-4 sm:p-6 lg:p-8 bg-white pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Minimal Footer */}
      <footer class="bg-white border-t border-gray-200 px-6 py-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-500">
          <div>Credenciado | 2025 © ILiberty</div>
          <div class="font-semibold text-gray-700">v2.0.0</div>
          <div>Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

