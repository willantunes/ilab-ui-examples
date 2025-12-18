import { Head } from "$fresh/runtime.ts";
import Option12Layout from "../../components/layouts/Option12Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option12/${item.id}`}
                  class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:bg-[#1a1a1a] hover:border-[#4ec9b0]/50 transition-all group relative"
                >
                  <div class="absolute -top-2 -left-2 w-7 h-7 bg-[#4ec9b0] text-[#0d0d0d] rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-[#4ec9b0]/30 z-10">
                    {index + 1}
                  </div>
                  <div class="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#4ec9b0] mb-4 group-hover:border-[#4ec9b0] group-hover:scale-110 transition-all">
                    <Icon />
                  </div>
                  <div class="text-gray-300 font-medium">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block absolute top-1/2 -right-2 text-[#2a2a2a] opacity-40">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option12Layout>
    </>
  );
}

