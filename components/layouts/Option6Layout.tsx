import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option6LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option6Layout({ children, currentPage = "fluxo-geral" }: Option6LayoutProps) {
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
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="sticky top-0 z-50 bg-white shadow-sm">
        <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="p-2 bg-blue-50 rounded-lg">
                <Logo />
              </div>
              <div>
                <div class="text-lg font-bold text-gray-900">gralab</div>
                <div class="text-xs text-gray-600">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 max-w-xl mx-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Busca Rápida..."
                  class="block w-full pl-12 pr-12 py-2.5 border-2 border-gray-200 rounded-xl bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                />
                <button class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                  <XIcon />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav class="hidden md:flex items-center gap-2">
              {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                <a href="#" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            {/* User Info */}
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="relative">
                <button class="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                  <BellIcon />
                </button>
                <span class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  9+
                </span>
              </div>
              <div class="hidden sm:block text-right bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <div class="text-sm font-bold text-gray-900">QA ILIBERTY</div>
                <div class="text-xs text-gray-600">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside class="hidden lg:block w-72 bg-white border-r-2 border-gray-200 min-h-[calc(100vh-4rem)] shadow-sm">
          <div class="p-6">
            <h2 class="text-base font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">Fluxo Geral</h2>
            <nav class="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option6/${item.id}`}
                    class={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      item.active
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 z-40 shadow-lg">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option6/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all ${
                    item.active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight font-semibold">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main class="flex-1 min-w-0 bg-gray-50">
          <div class="p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-white border-t-2 border-gray-200 py-5 px-6 shadow-sm">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div class="text-gray-600 font-medium">Credenciado | 2025 © ILiberty</div>
          <div class="font-bold text-blue-600 text-base">v2.0.0</div>
          <div class="text-gray-600 font-medium">Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

