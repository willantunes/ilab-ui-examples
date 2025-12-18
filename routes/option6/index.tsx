import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";

export default function Option6Home() {
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
    blue: "border-blue-500 text-blue-600",
    green: "border-green-500 text-green-600",
    purple: "border-purple-500 text-purple-600",
    yellow: "border-yellow-500 text-yellow-600",
    red: "border-red-500 text-red-600",
    indigo: "border-indigo-500 text-indigo-600",
    orange: "border-orange-500 text-orange-600",
    pink: "border-pink-500 text-pink-600",
  };

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 6</title>
      </Head>
      <Option6Layout currentPage="fluxo-geral">
        <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
          <div class="bg-blue-600 text-white px-6 py-4 rounded-t-2xl -m-8 mb-4">
            <h1 class="text-2xl font-bold">Fluxo Geral</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option6/${item.id}`}
                  class={`bg-white border-2 ${colorClasses[item.color]} rounded-xl p-6 hover:shadow-lg transition-all flex items-center gap-4 group relative`}
                >
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-md z-10 border-2 border-white"></div>
                  <div class={`flex-shrink-0 w-12 h-12 border-2 ${colorClasses[item.color]} rounded-lg flex items-center justify-center mt-2`}>
                    <Icon />
                  </div>
                  <div class="text-gray-900 font-semibold flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block flex-shrink-0 text-gray-300 opacity-40 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Option6Layout>
    </>
  );
}

