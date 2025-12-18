import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, CheckCircleIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option7Home() {
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
        <title>Gralab Diagnósticos - Opção 7</title>
      </Head>
      <Option7Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <DashboardCard title="Exames Coletados Hoje" value={dashboardData.examesColetadosHoje} subtitle="Últimas 24h" color="blue" trend={{ value: 12, isPositive: true }} />
              <DashboardCard title="Exames em Transporte" value={dashboardData.examesEmTransporte} subtitle="Em trânsito" color="purple" />
              <DashboardCard title="Exames Liberados" value={dashboardData.examesLiberadosMes} subtitle="Este mês" color="green" trend={{ value: 8, isPositive: true }} />
              <DashboardCard title="Ocorrências Abertas" value={dashboardData.ocorrenciasAberto} subtitle="Pendentes" color="orange" />
              <DashboardCard title="Aguardando Retorno" value={dashboardData.ocorrenciasAguardandoRetorno} subtitle="Em análise" color="red" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart title="Status dos Exames" data={dashboardData.statusExames} />
              <DonutChart title="Tipos de Exames" data={dashboardData.tiposExames} />
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-12">
            <div class="bg-gray-900 text-white px-8 py-6 rounded-t-2xl -m-12 mb-8">
              <h1 class="text-3xl font-bold tracking-tight">Fluxo Geral</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option7/${item.id}`}
                  class="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:bg-white hover:shadow-md transition-all flex items-center gap-5 group relative"
                >
                  <div class="absolute top-0 left-0 w-3 h-3 bg-gray-900 rounded-full shadow-md z-10"></div>
                  <div class="flex-shrink-0 relative">
                    <div class="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                      <Icon />
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircleIcon />
                    </div>
                  </div>
                  <div class="text-gray-900 font-semibold text-base flex-1">{item.label}</div>
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
        </div>
      </Option7Layout>
    </>
  );
}

