import { Head } from "$fresh/runtime.ts";
import Option12Layout from "../../components/layouts/Option12Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { PieChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option12Home() {
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
        <title>Gralab Diagnósticos - Opção 12</title>
      </Head>
      <Option12Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 sm:p-8">
            <h2 class="text-xl font-semibold text-white mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4ec9b0]/50 transition-all">
                <div class="text-sm font-medium text-gray-300 opacity-80 mb-1">Exames Coletados Hoje</div>
                <div class="text-3xl font-bold text-[#4ec9b0]">{dashboardData.examesColetadosHoje}</div>
                <div class="text-xs text-gray-500 mt-1">Últimas 24h</div>
              </div>
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:border-purple-500/50 transition-all">
                <div class="text-sm font-medium text-gray-300 opacity-80 mb-1">Exames em Transporte</div>
                <div class="text-3xl font-bold text-purple-400">{dashboardData.examesEmTransporte}</div>
                <div class="text-xs text-gray-500 mt-1">Em trânsito</div>
              </div>
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:border-green-500/50 transition-all">
                <div class="text-sm font-medium text-gray-300 opacity-80 mb-1">Exames Liberados</div>
                <div class="text-3xl font-bold text-green-400">{dashboardData.examesLiberadosMes}</div>
                <div class="text-xs text-gray-500 mt-1">Este mês</div>
              </div>
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:border-orange-500/50 transition-all">
                <div class="text-sm font-medium text-gray-300 opacity-80 mb-1">Ocorrências Abertas</div>
                <div class="text-3xl font-bold text-orange-400">{dashboardData.ocorrenciasAberto}</div>
                <div class="text-xs text-gray-500 mt-1">Pendentes</div>
              </div>
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:border-red-500/50 transition-all">
                <div class="text-sm font-medium text-gray-300 opacity-80 mb-1">Aguardando Retorno</div>
                <div class="text-3xl font-bold text-red-400">{dashboardData.ocorrenciasAguardandoRetorno}</div>
                <div class="text-xs text-gray-500 mt-1">Em análise</div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4">Status dos Exames</h3>
                <PieChart title="" data={dashboardData.statusExames} />
              </div>
              <div class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4">Tipos de Exames</h3>
                <PieChart title="" data={dashboardData.tiposExames} />
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
            <h1 class="text-2xl font-semibold text-white mb-6">Fluxo Geral</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option12/${item.id}`}
                  class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-6 hover:bg-[#1a1a1a] hover:border-[#4ec9b0]/50 transition-all group relative"
                >
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#4ec9b0] rounded-full shadow-lg shadow-[#4ec9b0]/30 z-10 ring-2 ring-[#4ec9b0]/20"></div>
                  <div class="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#4ec9b0] mb-4 group-hover:border-[#4ec9b0] group-hover:scale-110 transition-all">
                    <Icon />
                  </div>
                  <div class="text-gray-300 font-medium">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block absolute top-1/2 -right-2 flex-shrink-0 text-[#2a2a2a] opacity-40 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option12Layout>
    </>
  );
}

