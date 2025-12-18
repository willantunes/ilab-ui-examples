import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, CheckCircleIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

export default function Option7Home() {
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
        <title>Gralab Diagnósticos - Opção 7</title>
      </Head>
      <Option7Layout currentPage="fluxo-geral">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
          <div class="bg-gray-900 text-white px-8 py-6 rounded-t-2xl -m-12 mb-8">
            <h1 class="text-3xl font-bold tracking-tight">Fluxo Geral</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option7/${item.id}`}
                  class="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:bg-white hover:shadow-md transition-all flex items-center gap-5 group relative"
                >
                  <div class="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                  <div class="flex-shrink-0 relative">
                    <div class="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                      <Icon />
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircleIcon />
                    </div>
                  </div>
                  <div class="text-gray-900 font-semibold text-base flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block absolute top-1/2 -right-3 text-gray-300 opacity-40">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option7Layout>
    </>
  );
}

