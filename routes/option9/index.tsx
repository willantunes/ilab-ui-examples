import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option9/${item.id}`}
                  class="bg-[#252526] border border-[#3e3e42] rounded p-4 hover:bg-[#2a2d2e] transition-colors text-[#cccccc] group relative"
                >
                  <div class="absolute -top-2 -left-2 w-6 h-6 bg-[#4ec9b0] text-[#1e1e1e] rounded-full flex items-center justify-center text-xs font-bold z-10">
                    {index + 1}
                  </div>
                  <div class="w-10 h-10 text-[#4ec9b0] mb-3 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div class="text-sm">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block absolute top-1/2 -right-2 text-[#3e3e42] opacity-50">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option9Layout>
    </>
  );
}

