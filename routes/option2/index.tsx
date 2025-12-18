import { Head } from "$fresh/runtime.ts";
import Option2Layout from "../../components/layouts/Option2Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option2Home() {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon, gradient: "from-blue-500 to-blue-600" },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon, gradient: "from-green-500 to-green-600" },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon, gradient: "from-purple-500 to-purple-600" },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon, gradient: "from-yellow-500 to-yellow-600" },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon, gradient: "from-red-500 to-red-600" },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon, gradient: "from-indigo-500 to-indigo-600" },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon, gradient: "from-orange-500 to-orange-600" },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon, gradient: "from-pink-500 to-pink-600" },
  ];

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 2</title>
      </Head>
      <Option2Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white rounded-xl shadow-xl border-2 border-blue-200 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-blue-900 mb-6">Dashboard</h2>
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
          <div class="bg-white rounded-xl shadow-xl border-2 border-blue-200 p-8">
            <div class="bg-blue-600 text-white px-6 py-4 rounded-t-xl -m-8 mb-4">
              <h1 class="text-2xl font-bold">Fluxo Geral</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option2/${item.id}`}
                  class="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 hover:border-blue-500 flex items-center gap-4 shadow-md group relative"
                >
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg z-10 border-2 border-white"></div>
                  <div class={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <div class="text-blue-900 font-semibold flex-1">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block flex-shrink-0 text-blue-400 opacity-60 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option2Layout>
    </>
  );
}

