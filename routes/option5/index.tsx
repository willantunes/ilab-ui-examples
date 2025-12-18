import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

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
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option5/${item.id}`}
                  class={`${colorClasses[item.color]} border-l-4 border border-slate-200 rounded-lg p-4 sm:p-6 hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center gap-3 sm:gap-4 group`}
                >
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon />
                  </div>
                  <div class="text-slate-900 font-medium text-sm sm:text-base flex-1">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option5Layout>
    </>
  );
}

