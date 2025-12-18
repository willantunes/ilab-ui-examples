import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { PieChart, dashboardData } from "../../components/shared/Dashboard.tsx";

export default function Option9Home() {
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
        <title>Gralab Diagnósticos - Opção 9</title>
      </Head>
      <Option9Layout currentPage="fluxo-geral">
        <div class="space-y-6">
          {/* Dashboard Section */}
          <div class="bg-[#1e1e1e] border border-[#3e3e42] rounded p-6">
            <h2 class="text-xl font-semibold text-[#cccccc] mb-6">Dashboard</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-[#4ec9b0]/50 transition-all">
                <div class="text-sm font-medium text-[#cccccc] opacity-80 mb-1">Exames Coletados Hoje</div>
                <div class="text-3xl font-bold text-[#4ec9b0]">{dashboardData.examesColetadosHoje}</div>
                <div class="text-xs text-[#858585] mt-1">Últimas 24h</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-purple-500/50 transition-all">
                <div class="text-sm font-medium text-[#cccccc] opacity-80 mb-1">Exames em Transporte</div>
                <div class="text-3xl font-bold text-purple-400">{dashboardData.examesEmTransporte}</div>
                <div class="text-xs text-[#858585] mt-1">Em trânsito</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-green-500/50 transition-all">
                <div class="text-sm font-medium text-[#cccccc] opacity-80 mb-1">Exames Liberados</div>
                <div class="text-3xl font-bold text-green-400">{dashboardData.examesLiberadosMes}</div>
                <div class="text-xs text-[#858585] mt-1">Este mês</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-orange-500/50 transition-all">
                <div class="text-sm font-medium text-[#cccccc] opacity-80 mb-1">Ocorrências Abertas</div>
                <div class="text-3xl font-bold text-orange-400">{dashboardData.ocorrenciasAberto}</div>
                <div class="text-xs text-[#858585] mt-1">Pendentes</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-red-500/50 transition-all">
                <div class="text-sm font-medium text-[#cccccc] opacity-80 mb-1">Aguardando Retorno</div>
                <div class="text-3xl font-bold text-red-400">{dashboardData.ocorrenciasAguardandoRetorno}</div>
                <div class="text-xs text-[#858585] mt-1">Em análise</div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6">
                <h3 class="text-lg font-semibold text-[#cccccc] mb-4">Status dos Exames</h3>
                <PieChart title="" data={dashboardData.statusExames} />
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6">
                <h3 class="text-lg font-semibold text-[#cccccc] mb-4">Tipos de Exames</h3>
                <PieChart title="" data={dashboardData.tiposExames} />
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div class="bg-[#1e1e1e] border border-[#3e3e42] rounded p-6">
            <h1 class="text-xl font-semibold text-[#cccccc] mb-4">Fluxo Geral</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === menuItems.length - 1;
              const isLastInRow = (index + 1) % 4 === 0;
              return (
                <a
                  href={`/option9/${item.id}`}
                  class="bg-[#252526] border border-[#3e3e42] rounded p-4 hover:bg-[#2a2d2e] transition-colors text-[#cccccc] group relative"
                >
                  <div class="absolute top-0 left-0 w-2 h-2 bg-[#4ec9b0] rounded-full shadow-sm z-10"></div>
                  <div class="w-10 h-10 text-[#4ec9b0] mb-3 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div class="text-sm">{item.label}</div>
                  {!isLast && !isLastInRow && (
                    <div class="hidden lg:block absolute top-1/2 -right-2 flex-shrink-0 text-[#3e3e42] opacity-50 group-hover:opacity-100 transition-all">
                      <ArrowRightIcon />
                    </div>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </Option9Layout>
    </>
  );
}

