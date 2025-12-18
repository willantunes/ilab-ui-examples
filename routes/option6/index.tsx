import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option6/${item.id}`}
                  class={`bg-white border-2 ${colorClasses[item.color]} rounded-xl p-6 hover:shadow-lg transition-all flex items-center gap-4 group`}
                >
                  <div class={`flex-shrink-0 w-12 h-12 border-2 ${colorClasses[item.color]} rounded-lg flex items-center justify-center`}>
                    <Icon />
                  </div>
                  <div class="text-gray-900 font-semibold flex-1">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option6Layout>
    </>
  );
}

