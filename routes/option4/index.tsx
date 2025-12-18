import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, dashboardData } from "../../components/shared/Dashboard.tsx";

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
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-cyan-400 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div class="bg-gray-700/50 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div class="text-sm font-bold text-cyan-200 mb-1">Exames Coletados Hoje</div>
                <div class="text-3xl font-bold text-cyan-300">{dashboardData.examesColetadosHoje}</div>
                <div class="text-xs text-gray-300 mt-1 font-semibold">Últimas 24h</div>
              </div>
              <div class="bg-gray-700/50 border-2 border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div class="text-sm font-bold text-purple-200 mb-1">Exames em Transporte</div>
                <div class="text-3xl font-bold text-purple-300">{dashboardData.examesEmTransporte}</div>
                <div class="text-xs text-gray-300 mt-1 font-semibold">Em trânsito</div>
              </div>
              <div class="bg-gray-700/50 border-2 border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div class="text-sm font-bold text-green-200 mb-1">Exames Liberados</div>
                <div class="text-3xl font-bold text-green-300">{dashboardData.examesLiberadosMes}</div>
                <div class="text-xs text-gray-300 mt-1 font-semibold">Este mês</div>
              </div>
              <div class="bg-gray-700/50 border-2 border-orange-500/30 rounded-xl p-6 hover:border-orange-500/50 transition-all">
                <div class="text-sm font-bold text-orange-200 mb-1">Ocorrências Abertas</div>
                <div class="text-3xl font-bold text-orange-300">{dashboardData.ocorrenciasAberto}</div>
                <div class="text-xs text-gray-300 mt-1 font-semibold">Pendentes</div>
              </div>
              <div class="bg-gray-700/50 border-2 border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-all">
                <div class="text-sm font-bold text-red-200 mb-1">Aguardando Retorno</div>
                <div class="text-3xl font-bold text-red-300">{dashboardData.ocorrenciasAguardandoRetorno}</div>
                <div class="text-xs text-gray-300 mt-1 font-semibold">Em análise</div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-gray-700/50 border-2 border-cyan-500/30 rounded-xl p-6">
                <h3 class="text-lg font-bold text-cyan-300 mb-4">Status dos Exames</h3>
                <div class="flex items-center gap-6">
                  <div class="flex-shrink-0">
                    <PieChart title="" data={dashboardData.statusExames} size={140} />
                  </div>
                  <div class="flex-1 space-y-2">
                    {dashboardData.statusExames.map((item, idx) => {
                      const total = dashboardData.statusExames.reduce((sum, i) => sum + i.value, 0);
                      const percentage = ((item.value / total) * 100).toFixed(1);
                      return (
                        <div key={idx} class="flex items-center justify-between">
                          <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full border border-gray-500" style={`background-color: ${item.color}`}></div>
                            <span class="text-sm font-semibold text-gray-200">{item.label}</span>
                          </div>
                          <div class="text-sm font-bold text-gray-100">
                            {item.value} ({percentage}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="bg-gray-700/50 border-2 border-cyan-500/30 rounded-xl p-6">
                <h3 class="text-lg font-bold text-cyan-300 mb-4">Tipos de Exames</h3>
                <div class="space-y-3">
                  {dashboardData.tiposExames.map((item, idx) => {
                    const max = Math.max(...dashboardData.tiposExames.map(i => i.value));
                    const percentage = (item.value / max) * 100;
                    return (
                      <div key={idx}>
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-sm font-semibold text-gray-200">{item.label}</span>
                          <span class="text-sm font-bold text-gray-100">{item.value}</span>
                        </div>
                        <div class="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
                          <div
                            class="h-4 rounded-full transition-all"
                            style={`width: ${percentage}%; background-color: ${item.color}`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30 p-8">
            <div class="bg-gray-700 border-b-2 border-cyan-500 text-cyan-400 px-6 py-4 rounded-t-xl -m-8 mb-4">
              <h1 class="text-2xl font-bold">Fluxo Geral</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option4/${item.id}`}
                  class="bg-gray-800 border-2 border-cyan-500/30 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-105 hover:border-cyan-500 flex items-center gap-4 shadow-lg group relative"
                >
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 z-10 ring-2 ring-cyan-500/30"></div>
                  <div class="flex-shrink-0 w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:bg-cyan-500/30 transition-all">
                    <Icon />
                  </div>
                  <div class="text-gray-100 font-semibold flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block flex-shrink-0 text-cyan-500/50 opacity-60 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option4Layout>
    </>
  );
}

