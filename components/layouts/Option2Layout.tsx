import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option2LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option2Layout({ children, currentPage = "fluxo-geral" }: Option2LayoutProps) {
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
      <header class="bg-white shadow-md border-b-2 border-blue-600">
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
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Q Busca Rápida..."
                  class="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-gray-50 border-2 border-gray-200 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
                />
                <button class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                  <XIcon />
                </button>
              </div>
              
              {/* Navigation - Hidden on mobile */}
              <nav class="hidden md:flex gap-4 lg:gap-6 mt-2">
                {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                  <a href="#" class="text-xs lg:text-sm text-blue-700 hover:text-blue-900 font-semibold transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* User Info */}
            <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0 order-2 sm:order-3">
              <div class="relative">
                <button class="p-1.5 sm:p-2 text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 rounded-lg">
                  <BellIcon />
                </button>
                <span class="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                  9+
                </span>
              </div>
              <div class="hidden sm:block text-right bg-blue-50 px-3 sm:px-4 py-2 rounded-lg">
                <div class="text-xs sm:text-sm font-bold text-blue-900">QA ILIBERTY</div>
                <div class="text-[10px] sm:text-xs text-blue-600">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside class="hidden lg:block w-64 min-h-[calc(100vh-73px)] bg-white shadow-xl border-r-2 border-blue-600 sticky top-[73px]">
          <div class="p-6">
            <h2 class="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Fluxo Geral</h2>
            <nav class="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option2/${item.id}`}
                    class={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all shadow-sm ${
                      item.active
                        ? "bg-blue-600 text-white font-semibold shadow-md transform scale-105"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-900 hover:shadow-md"
                    }`}
                  >
                    <Icon />
                    <span class="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-8 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 z-40 shadow-lg">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option2/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all ${
                    item.active
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
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
        <main class="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-white shadow-lg border-t-2 border-blue-600 py-4 px-8">
        <div class="flex items-center justify-between text-sm text-gray-700">
          <div class="font-medium">Credenciado | 2025 © ILiberty</div>
          <div class="font-bold text-blue-600">v2.0.0</div>
          <div class="font-medium">Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

