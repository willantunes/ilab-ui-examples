import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon } from "../../components/shared/Icons.tsx";

export default function Option4Home() {
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
        <title>Gralab Diagnósticos - Opção 4</title>
      </Head>
      <Option4Layout currentPage="fluxo-geral">
        <div class="bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30 p-8">
          <div class="bg-gray-700 border-b-2 border-cyan-500 text-cyan-400 px-6 py-4 rounded-t-xl -m-8 mb-4">
            <h1 class="text-2xl font-bold">Fluxo Geral</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={`/option4/${item.id}`}
                  class="bg-gray-800 border-2 border-cyan-500/30 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-105 hover:border-cyan-500 flex items-center gap-4 shadow-lg group"
                >
                  <div class="flex-shrink-0 w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:bg-cyan-500/30 transition-all">
                    <Icon />
                  </div>
                  <div class="text-gray-100 font-semibold flex-1">{item.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </Option4Layout>
    </>
  );
}

