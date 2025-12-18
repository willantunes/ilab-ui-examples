import { type ComponentChildren } from "preact";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, XIcon } from "./Icons.tsx";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage?: string;
  basePath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPage, basePath }: MobileMenuProps) {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      {/* Menu */}
      <div class="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl z-50 lg:hidden overflow-y-auto">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900">Fluxo Geral</h2>
          <button
            onClick={onClose}
            class="p-2 text-gray-600 hover:text-gray-900"
          >
            <XIcon />
          </button>
        </div>
        <nav class="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <a
                href={`${basePath}/${item.id}`}
                onClick={onClose}
                class={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}

