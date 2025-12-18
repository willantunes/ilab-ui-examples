import { Head } from "$fresh/runtime.ts";
import Option11Layout from "../../components/layouts/Option11Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

export default function Option11Home() {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon, color: "bg-blue-50 border-blue-200 text-blue-600" },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon, color: "bg-green-50 border-green-200 text-green-600" },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon, color: "bg-purple-50 border-purple-200 text-purple-600" },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon, color: "bg-yellow-50 border-yellow-200 text-yellow-600" },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon, color: "bg-red-50 border-red-200 text-red-600" },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon, color: "bg-indigo-50 border-indigo-200 text-indigo-600" },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon, color: "bg-orange-50 border-orange-200 text-orange-600" },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon, color: "bg-pink-50 border-pink-200 text-pink-600" },
  ];

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 11</title>
      </Head>
      <Option11Layout currentPage="fluxo-geral">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Fluxo Geral</h1>
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option11/${item.id}`}
                  class={`${item.color} border-2 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all cursor-pointer group`}
                >
                  <div class={`flex-shrink-0 w-12 h-12 ${item.color.split(' ')[0]} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <div class="text-gray-900 font-semibold text-sm sm:text-base">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option11Layout>
    </>
  );
}

