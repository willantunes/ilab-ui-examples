import { Head } from "$fresh/runtime.ts";
import Option8Layout from "../../components/layouts/Option8Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { DashboardCard, PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option8Home() {
  const menuItems = [
    { id: "estoque", label: "Estoque de kits", icon: GridIcon, progress: 85 },
    { id: "cadastro", label: "Cadastro de Exames", icon: ListIcon, progress: 70 },
    { id: "comprovante", label: "Comprovante de Envio", icon: MonitorIcon, progress: 90 },
    { id: "laudos", label: "Laudos disponíveis", icon: EnvelopeIcon, progress: 65 },
    { id: "financeiro", label: "Financeiro", icon: DollarIcon, progress: 80 },
    { id: "empresa", label: "Nova Empresa", icon: TruckIcon, progress: 75 },
    { id: "ocorrencias", label: "Ocorrências", icon: AlertTriangleIcon, progress: 60 },
    { id: "treinamentos", label: "Meus Treinamentos", icon: GraduationCapIcon, progress: 95 },
  ];

  return (
    <>
      <Head>
        <title>Gralab Diagnósticos - Opção 8</title>
      </Head>
      <Option8Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
            <h2 class="text-xl font-bold text-slate-900 mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <DashboardCard title="Exames Coletados Hoje" value={dashboardData.examesColetadosHoje} subtitle="Últimas 24h" color="blue" trend={{ value: 12, isPositive: true }} />
              <DashboardCard title="Exames em Transporte" value={dashboardData.examesEmTransporte} subtitle="Em trânsito" color="purple" />
              <DashboardCard title="Exames Liberados" value={dashboardData.examesLiberadosMes} subtitle="Este mês" color="green" trend={{ value: 8, isPositive: true }} />
              <DashboardCard title="Ocorrências Abertas" value={dashboardData.ocorrenciasAberto} subtitle="Pendentes" color="orange" />
              <DashboardCard title="Aguardando Retorno" value={dashboardData.ocorrenciasAguardandoRetorno} subtitle="Em análise" color="red" />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PieChart title="Status dos Exames" data={dashboardData.statusExames} />
              <BarChart title="Tipos de Exames" data={dashboardData.tiposExames} />
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-white rounded-2xl shadow-md border border-slate-200 p-10">
            <div class="bg-blue-600 text-white px-8 py-5 rounded-t-2xl -m-10 mb-6">
              <h1 class="text-2xl font-bold">Fluxo Geral</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <a
                  href={`/option8/${item.id}`}
                  class="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all group relative"
                >
                  <div class="absolute top-0 left-0 w-2 h-2 bg-blue-600 rounded-full shadow-sm z-10"></div>
                  <div class="flex items-center gap-4 mb-3">
                    <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                      <Icon />
                    </div>
                    <div class="text-slate-900 font-semibold flex-1">{item.label}</div>
                  </div>
                  <div class="w-full bg-slate-200 rounded-full h-1.5">
                    <div 
                      class="bg-blue-600 h-1.5 rounded-full transition-all group-hover:bg-blue-700" 
                      style={`width: ${item.progress}%`}
                    ></div>
                  </div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden md:block absolute top-1/2 -right-2 flex-shrink-0 text-slate-300 opacity-40 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option8Layout>
    </>
  );
}

