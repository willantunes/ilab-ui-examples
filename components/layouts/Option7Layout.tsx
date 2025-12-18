import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option7LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option7Layout({ children, currentPage = "fluxo-geral" }: Option7LayoutProps) {
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
      {/* Header */}
      <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <div class="flex items-center gap-4 flex-shrink-0">
              <Logo />
              <div>
                <div class="text-xl font-bold text-gray-900 tracking-tight">gralab</div>
                <div class="text-xs text-gray-500 font-medium tracking-wide">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 max-w-2xl">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Busca Rápida..."
                  class="block w-full pl-11 pr-11 py-3 border border-gray-200 rounded-2xl bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                />
                <button class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                  <XIcon />
                </button>
              </div>
              
              {/* Navigation */}
              <nav class="flex items-center gap-6 mt-3">
                {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                  <a href="#" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* User Info */}
            <div class="flex items-center gap-4 flex-shrink-0">
              <div class="relative">
                <button class="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                  <BellIcon />
                </button>
                <span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center ring-2 ring-white">
                  9+
                </span>
              </div>
              <div class="text-right">
                <div class="text-sm font-semibold text-gray-900">QA ILIBERTY</div>
                <div class="text-xs text-gray-500">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside class="hidden lg:block w-64 bg-gray-50 border-r border-gray-100 min-h-[calc(100vh-5rem)]">
          <div class="p-6">
            <h2 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Fluxo Geral</h2>
            <nav class="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option7/${item.id}`}
                    class={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      item.active
                        ? "bg-white text-blue-600 shadow-sm border border-blue-100"
                        : "text-gray-700 hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-8 px-3 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40 shadow-sm">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option7/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg transition-all ${
                    item.active
                      ? "bg-white text-blue-600 shadow-sm border border-blue-100"
                      : "text-gray-700 hover:bg-white"
                  }`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight font-medium">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main class="flex-1 min-w-0">
          <div class="p-4 sm:p-6 md:p-8 lg:p-12 pb-20 lg:pb-12">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-gray-50 border-t border-gray-100 py-6 px-8">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>Credenciado | 2025 © ILiberty</div>
          <div class="font-semibold text-gray-900">v2.0.0</div>
          <div>Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

