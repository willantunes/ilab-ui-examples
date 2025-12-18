import { Head } from "$fresh/runtime.ts";
import Option12Layout from "../../components/layouts/Option12Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

export default function Option12Home() {
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
        <title>Gralab Diagnósticos - Opção 12</title>
      </Head>
      <Option12Layout currentPage="fluxo-geral">
        <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
          <h1 class="text-2xl font-semibold text-white mb-6">Fluxo Geral</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option12/${item.id}`}
                  class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:bg-[#1a1a1a] hover:border-[#4ec9b0]/50 transition-all group"
                >
                  <div class="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#4ec9b0] mb-4 group-hover:border-[#4ec9b0] group-hover:scale-110 transition-all">
                    <Icon />
                  </div>
                  <div class="text-gray-300 font-medium">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option12Layout>
    </>
  );
}

