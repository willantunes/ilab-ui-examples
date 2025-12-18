import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option10LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option10Layout({ children, currentPage = "fluxo-geral" }: Option10LayoutProps) {
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
      {/* Browser-style Top Bar */}
      <header class="bg-gray-100 border-b border-gray-300">
        {/* Tab Bar */}
        <div class="flex items-end bg-gray-200 border-b border-gray-300 px-1 sm:px-2 gap-1 overflow-x-auto">
          {menuItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={`/option10/${item.id}`}
                class={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-t-lg border-t border-x border-gray-300 whitespace-nowrap ${
                  item.active
                    ? "bg-white border-b-white -mb-px text-blue-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-250"
                } text-xs sm:text-sm font-medium transition-colors`}
              >
                <Icon />
                <span class="hidden sm:inline">{item.label}</span>
                <span class="sm:hidden">{item.label.split(" ")[0]}</span>
              </a>
            );
          })}
          <div class="flex-1 hidden sm:block"></div>
          <div class="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 flex-shrink-0">
            <button class="p-1 text-gray-600 hover:text-gray-900">
              <BellIcon />
            </button>
            <span class="hidden md:inline text-xs text-gray-600">QA ILIBERTY</span>
          </div>
        </div>

        {/* Address Bar */}
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2">
          <div class="hidden sm:block">
            <Logo />
          </div>
          <div class="flex-1 max-w-2xl">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Busca Rápida..."
                class="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <nav class="hidden md:flex items-center gap-3 lg:gap-4">
            {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
              <a href="#" class="text-xs lg:text-sm text-gray-700 hover:text-gray-900 font-medium">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Navigation - Additional tabs */}
      <div class="lg:hidden bg-gray-200 border-b border-gray-300 px-2 overflow-x-auto">
        <div class="flex gap-1 min-w-max">
          {menuItems.slice(4, 8).map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={`/option10/${item.id}`}
                class={`flex items-center gap-2 px-3 py-2 rounded-t-lg border-t border-x border-gray-300 ${
                  item.active
                    ? "bg-white border-b-white -mb-px text-blue-600"
                    : "bg-gray-200 text-gray-700"
                } text-xs font-medium whitespace-nowrap`}
              >
                <Icon />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <main class="p-4 sm:p-6 bg-gray-50 min-h-[calc(100vh-120px)] pb-20 lg:pb-6">
        {children}
      </main>

      {/* Status Bar */}
      <footer class="bg-gray-100 border-t border-gray-300 px-4 py-2 flex items-center justify-between text-xs text-gray-600">
        <div>Credenciado | 2025 © ILiberty</div>
        <div class="font-semibold">v2.0.0</div>
        <div>Usuário: QA ILIBERTY</div>
      </footer>
    </div>
  );
}

