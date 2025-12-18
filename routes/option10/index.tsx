import { Head } from "$fresh/runtime.ts";
import Option10Layout from "../../components/layouts/Option10Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option10Home() {
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
        <title>Gralab Diagnósticos - Opção 10</title>
      </Head>
      <Option10Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <DashboardCard title="Exames Coletados Hoje" value={dashboardData.examesColetadosHoje} subtitle="Últimas 24h" color="blue" trend={{ value: 12, isPositive: true }} />
              <DashboardCard title="Exames em Transporte" value={dashboardData.examesEmTransporte} subtitle="Em trânsito" color="purple" />
              <DashboardCard title="Exames Liberados" value={dashboardData.examesLiberadosMes} subtitle="Este mês" color="green" trend={{ value: 8, isPositive: true }} />
              <DashboardCard title="Ocorrências Abertas" value={dashboardData.ocorrenciasAberto} subtitle="Pendentes" color="orange" />
              <DashboardCard title="Aguardando Retorno" value={dashboardData.ocorrenciasAguardandoRetorno} subtitle="Em análise" color="red" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PieChart title="Status dos Exames" data={dashboardData.statusExames} />
              <PieChart title="Tipos de Exames" data={dashboardData.tiposExames} />
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 class="text-2xl font-bold text-gray-900 mb-6">Fluxo Geral</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option10/${item.id}`}
                  class="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 hover:border-blue-300 transition-all group relative overflow-hidden"
                >
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-md z-10 border-2 border-white"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all"></div>
                  <div class="relative flex items-center gap-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-sm">
                      <Icon />
                    </div>
                    <div class="text-gray-900 font-medium flex-1">{item.label}</div>
                  </div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block absolute top-1/2 -right-2 flex-shrink-0 text-gray-300 opacity-40 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option10Layout>
    </>
  );
}

