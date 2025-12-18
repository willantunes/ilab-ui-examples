import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, DotIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

export default function Option3Home() {
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
        <title>Gralab Diagnósticos - Opção 3</title>
      </Head>
      <Option3Layout currentPage="fluxo-geral">
        <div class="bg-white rounded-2xl shadow-2xl border-4 border-blue-300 p-8">
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl -m-8 mb-4">
            <h1 class="text-2xl font-bold">Fluxo Geral</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option3/${item.id}`}
                  class="bg-gradient-to-br from-white to-blue-50 border-4 border-blue-300 rounded-xl p-6 hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-4 shadow-xl group relative"
                >
                  <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white z-10">
                    {index + 1}
                  </div>
                  <div class="flex-shrink-0 relative mt-2">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Icon />
                    </div>
                    <div class="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                      <DotIcon />
                    </div>
                  </div>
                  <div class="text-blue-900 font-semibold flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block absolute top-1/2 -right-3 text-blue-400 opacity-60">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option3Layout>
    </>
  );
}

