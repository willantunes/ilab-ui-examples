import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

export default function Option9Home() {
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

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 9</title>
      </Head>
      <Option9Layout currentPage="fluxo-geral">
        <div class="bg-[#1e1e1e] border border-[#3e3e42] rounded p-6">
          <h1 class="text-xl font-semibold text-[#cccccc] mb-4">Fluxo Geral</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option9/${item.id}`}
                  class="bg-[#252526] border border-[#3e3e42] rounded p-4 hover:bg-[#2a2d2e] transition-colors text-[#cccccc] group"
                >
                  <div class="w-10 h-10 text-[#4ec9b0] mb-3 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div class="text-sm">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option9Layout>
    </>
  );
}

