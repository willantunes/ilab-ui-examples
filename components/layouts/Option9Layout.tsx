import { type ComponentChildren } from "preact";
import Logo from "../shared/Logo.tsx";
import { SearchIcon, BellIcon, XIcon, GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ChevronRightIcon } from "../shared/Icons.tsx";

interface Option9LayoutProps {
  children: ComponentChildren;
  currentPage?: string;
  darkMode?: boolean;
}

export default function Option9Layout({ children, currentPage = "fluxo-geral", darkMode = true }: Option9LayoutProps) {

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

  const bg = "bg-[#1e1e1e]";
  const sidebarBg = "bg-[#252526]";
  const text = "text-[#cccccc]";
  const textSecondary = "text-[#858585]";
  const border = "border-[#3e3e42]";
  const headerBg = "bg-[#2d2d30]";
  const activeBg = "bg-[#094771]";
  const hoverBg = "hover:bg-[#2a2d2e]";

  return (
    <div class={`min-h-screen ${bg} flex flex-col lg:flex-row`}>
      {/* VS Code-style Sidebar - Hidden on mobile */}
      <aside class={`hidden lg:flex ${sidebarBg} w-64 border-r ${border} flex-col`}>
        <div class="p-2 flex items-center gap-2 border-b ${border}">
          <Logo />
          <div>
            <div class={`text-xs font-semibold ${text}`}>gralab</div>
            <div class={`text-[10px] ${textSecondary}`}>DIAGNOSTICOS</div>
          </div>
        </div>

        <nav class="flex-1 overflow-y-auto py-2">
          <div class={`px-3 py-1.5 text-[11px] font-semibold uppercase ${textSecondary} tracking-wider`}>
            Fluxo Geral
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={`/option9/${item.id}`}
                class={`flex items-center gap-3 px-3 py-1.5 ${text} text-sm ${
                  item.active ? activeBg : ""
                } ${hoverBg} transition-colors`}
              >
                <Icon />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div class={`border-t ${border} p-2`}>
          <a
            href={`/option9/${currentPage}?theme=${darkMode ? "light" : "dark"}`}
            class={`w-full px-3 py-2 ${hoverBg} rounded text-sm ${text} flex items-center gap-2`}
          >
            <span>🌙</span>
            <span>Dark Mode</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div class="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header class={`${headerBg} border-b ${border} h-10 flex items-center justify-between px-4`}>
          <div class="flex items-center gap-4 flex-1">
            <div class="relative flex-1 max-w-md">
              <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Busca Rápida..."
                class={`w-full pl-8 pr-8 py-1.5 bg-[#3c3c3c] ${text} text-sm border ${border} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <nav class="hidden md:flex items-center gap-1">
              {["Organização", "Credenciamento", "Análise", "Financeiro", "Relatórios"].map((item) => (
                <a href="#" class={`px-2 py-1 text-xs ${textSecondary} ${hoverBg} rounded`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            <div class="relative">
              <button class={`p-1.5 ${hoverBg} rounded ${textSecondary}`}>
                <BellIcon />
              </button>
              <span class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                9+
              </span>
            </div>
            <div class={`px-2 py-1 ${hoverBg} rounded text-xs ${text}`}>
              QA ILIBERTY
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-[#252526] border-t border-[#3e3e42] z-40">
          <div class="grid grid-cols-4 gap-1 p-2">
            {menuItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option9/${item.id}`}
                  class={`flex flex-col items-center gap-1 px-2 py-2 rounded transition-colors ${
                    item.active
                      ? activeBg
                      : hoverBg
                  } ${text}`}
                >
                  <Icon />
                  <span class="text-[10px] text-center leading-tight">{item.label.split(" ")[0]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Content */}
        <main class="flex-1 overflow-auto p-3 sm:p-4 pb-20 lg:pb-4">
          {children}
        </main>

        {/* Status Bar */}
        <footer class={`${headerBg} border-t ${border} h-6 flex items-center justify-between px-4 text-xs ${textSecondary}`}>
          <div>Credenciado | 2025 © ILiberty</div>
          <div class="font-semibold">v2.0.0</div>
          <div>Usuário: QA ILIBERTY</div>
        </footer>
      </div>
    </div>
  );
}

