import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

export default function Option5Home() {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon, color: "blue" },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon, color: "green" },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon, color: "purple" },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon, color: "yellow" },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon, color: "red" },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon, color: "indigo" },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon, color: "orange" },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon, color: "pink" },
  ];

  const colorClasses: Record<string, string> = {
    blue: "border-l-blue-500 bg-blue-50/50",
    green: "border-l-green-500 bg-green-50/50",
    purple: "border-l-purple-500 bg-purple-50/50",
    yellow: "border-l-yellow-500 bg-yellow-50/50",
    red: "border-l-red-500 bg-red-50/50",
    indigo: "border-l-indigo-500 bg-indigo-50/50",
    orange: "border-l-orange-500 bg-orange-50/50",
    pink: "border-l-pink-500 bg-pink-50/50",
  };

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 5</title>
      </Head>
      <Option5Layout currentPage="fluxo-geral">
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div class="bg-slate-900 text-white px-6 py-4 rounded-t-xl -m-8 mb-4">
            <h1 class="text-2xl font-bold">Fluxo Geral</h1>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option5/${item.id}`}
                  class={`${colorClasses[item.color]} border-l-4 border border-slate-200 rounded-lg p-4 sm:p-6 hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center gap-3 sm:gap-4 group relative`}
                >
                  <div class="absolute top-0 left-0 w-2 h-2 bg-slate-900 rounded-full shadow-sm z-10"></div>
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon />
                  </div>
                  <div class="text-slate-900 font-medium text-sm sm:text-base flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block flex-shrink-0 text-slate-300 opacity-50 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option5Layout>
    </>
  );
}

