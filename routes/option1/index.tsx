import { Head } from "$fresh/runtime.ts";
import Option1Layout from "../../components/layouts/Option1Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option1Home() {
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
        <title>Gralab Diagnósticos - Opção 1</title>
      </Head>
      <Option1Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-blue-900 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
              <DashboardCard
                title="Exames Coletados Hoje"
                value={dashboardData.examesColetadosHoje}
                subtitle="Últimas 24h"
                color="blue"
                trend={{ value: 12, isPositive: true }}
              />
              <DashboardCard
                title="Exames em Transporte"
                value={dashboardData.examesEmTransporte}
                subtitle="Em trânsito"
                color="purple"
              />
              <DashboardCard
                title="Exames Liberados"
                value={dashboardData.examesLiberadosMes}
                subtitle="Este mês"
                color="green"
                trend={{ value: 8, isPositive: true }}
              />
              <DashboardCard
                title="Ocorrências Abertas"
                value={dashboardData.ocorrenciasAberto}
                subtitle="Pendentes"
                color="orange"
              />
              <DashboardCard
                title="Aguardando Retorno"
                value={dashboardData.ocorrenciasAguardandoRetorno}
                subtitle="Em análise"
                color="red"
              />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-6">
                <h3 class="text-lg font-bold text-blue-900 mb-4">Status dos Exames</h3>
                <PieChart title="" data={dashboardData.statusExames} />
              </div>
              <div class="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-6">
                <BarChart title="Tipos de Exames" data={dashboardData.tiposExames} />
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50 p-8">
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-t-2xl -m-8 mb-4">
              <h1 class="text-2xl font-bold">Fluxo Geral</h1>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option1/${item.id}`}
                  class="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-3 sm:gap-4 group relative"
                >
                  <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-md z-10 border-2 border-white"></div>
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                    <Icon />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-blue-900 font-semibold text-sm sm:text-base">{item.label}</div>
                  </div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block flex-shrink-0 text-blue-300 opacity-50 group-hover:opacity-100 group-hover:text-blue-500 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option1Layout>
    </>
  );
}

