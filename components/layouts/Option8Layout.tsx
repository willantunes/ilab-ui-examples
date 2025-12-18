import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../shared/Icons.tsx";

interface Option8LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
}

export default function Option8Layout({ children, currentPage = "fluxo-geral" }: Option8LayoutProps) {
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
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 gap-6">
            {/* Logo */}
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="p-1.5 bg-blue-600 rounded-lg">
                <Logo />
              </div>
              <div>
                <div class="text-lg font-bold text-slate-900">gralab</div>
                <div class="text-xs text-slate-600 font-medium">DIAGNOSTICOS</div>
              </div>
            </div>

            {/* Search */}
            <div class="flex-1 max-w-xl mx-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Busca Rápida..."
                  class="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                />
                <button class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600">
                  <XIcon />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav class="hidden lg:flex items-center gap-1">
              {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                <a href="#" class="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            {/* User Info */}
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="relative">
                <button class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                  <BellIcon />
                </button>
                <span class="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-white shadow-sm">
                  9+
                </span>
              </div>
              <div class="hidden sm:block text-right bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <div class="text-sm font-semibold text-slate-900">QA ILIBERTY</div>
                <div class="text-xs text-slate-500">GRALAB DIAGNOSTICOS</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <aside class="hidden lg:block w-64 bg-white/80 backdrop-blur-sm border-r border-slate-200/80 min-h-[calc(100vh-4rem)]">
          <div class="p-5">
            <h2 class="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Fluxo Geral</h2>
            <nav class="space-y-1.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    href={`/option8/${item.id}`}
                    class={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      item.active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
            <button class="w-full mt-6 px-3 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm">
              Desafixar
            </button>
          </div>
        </aside>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200/80 z-40 shadow-md">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option8/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl transition-all ${
                    item.active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-700 hover:bg-slate-100"
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
          <div class="p-4 sm:p-6 lg:p-10 pb-20 lg:pb-10">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer class="bg-white/80 backdrop-blur-sm border-t border-slate-200/80 py-4 px-6">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>Credenciado | 2025 © ILiberty</div>
          <div class="font-bold text-slate-900">v2.0.0</div>
          <div>Usuário: QA ILIBERTY</div>
        </div>
      </footer>
    </div>
  );
}

