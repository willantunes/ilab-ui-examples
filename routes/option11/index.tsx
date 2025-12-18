import { Head } from "$fresh/runtime.ts";
import Option11Layout from "../../components/layouts/Option11Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

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
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
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
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-8">Fluxo Geral</h1>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option11/${item.id}`}
                  class={`${item.color} border-2 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all cursor-pointer group relative`}
                >
                  <div class="absolute top-0 left-0 w-2 h-2 bg-gray-900 rounded-full shadow-sm z-10"></div>
                  <div class={`flex-shrink-0 w-12 h-12 ${item.color.split(' ')[0]} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <div class="text-gray-900 font-semibold text-sm sm:text-base">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block absolute top-1/2 -right-2 flex-shrink-0 text-gray-300 opacity-30 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option11Layout>
    </>
  );
}

