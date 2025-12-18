import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, DotIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

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
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white rounded-2xl shadow-2xl border-4 border-blue-300 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-blue-900 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <DashboardCard title="Exames Coletados Hoje" value={dashboardData.examesColetadosHoje} subtitle="Últimas 24h" color="blue" trend={{ value: 12, isPositive: true }} />
              <DashboardCard title="Exames em Transporte" value={dashboardData.examesEmTransporte} subtitle="Em trânsito" color="purple" />
              <DashboardCard title="Exames Liberados" value={dashboardData.examesLiberadosMes} subtitle="Este mês" color="green" trend={{ value: 8, isPositive: true }} />
              <DashboardCard title="Ocorrências Abertas" value={dashboardData.ocorrenciasAberto} subtitle="Pendentes" color="orange" />
              <DashboardCard title="Aguardando Retorno" value={dashboardData.ocorrenciasAguardandoRetorno} subtitle="Em análise" color="red" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-white border-4 border-blue-300 rounded-xl p-6 shadow-xl">
                <h3 class="text-lg font-bold text-blue-900 mb-4">Status dos Exames</h3>
                <PieChart title="" data={dashboardData.statusExames} />
              </div>
              <BarChart title="Tipos de Exames" data={dashboardData.tiposExames} />
            </div>
          </div>

          {/* Menu Section */}
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
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-xl border-2 border-white z-10"></div>
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
                    <div class="hidden md:block flex-shrink-0 text-blue-500 opacity-70 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option3Layout>
    </>
  );
}

