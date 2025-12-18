import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import { GridIcon, ListIcon, MonitorIcon, EnvelopeIcon, DollarIcon, TruckIcon, AlertTriangleIcon, GraduationCapIcon, ArrowRightIcon } from "../../components/shared/Icons.tsx";
import { PieChart, BarChart, DonutChart, dashboardData } from "../../components/shared/Dashboard.tsx";

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
                <div class="text-sm font-bold text-[#e0e0e0] mb-1">Exames Coletados Hoje</div>
                <div class="text-3xl font-bold text-[#4ec9b0]">{dashboardData.examesColetadosHoje}</div>
                <div class="text-xs text-[#b0b0b0] mt-1 font-semibold">Últimas 24h</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-purple-500/50 transition-all">
                <div class="text-sm font-bold text-[#e0e0e0] mb-1">Exames em Transporte</div>
                <div class="text-3xl font-bold text-purple-300">{dashboardData.examesEmTransporte}</div>
                <div class="text-xs text-[#b0b0b0] mt-1 font-semibold">Em trânsito</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-green-500/50 transition-all">
                <div class="text-sm font-bold text-[#e0e0e0] mb-1">Exames Liberados</div>
                <div class="text-3xl font-bold text-green-300">{dashboardData.examesLiberadosMes}</div>
                <div class="text-xs text-[#b0b0b0] mt-1 font-semibold">Este mês</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-orange-500/50 transition-all">
                <div class="text-sm font-bold text-[#e0e0e0] mb-1">Ocorrências Abertas</div>
                <div class="text-3xl font-bold text-orange-300">{dashboardData.ocorrenciasAberto}</div>
                <div class="text-xs text-[#b0b0b0] mt-1 font-semibold">Pendentes</div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6 hover:border-red-500/50 transition-all">
                <div class="text-sm font-bold text-[#e0e0e0] mb-1">Aguardando Retorno</div>
                <div class="text-3xl font-bold text-red-300">{dashboardData.ocorrenciasAguardandoRetorno}</div>
                <div class="text-xs text-[#b0b0b0] mt-1 font-semibold">Em análise</div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6">
                <h3 class="text-lg font-bold text-[#e0e0e0] mb-4">Status dos Exames</h3>
                <div class="flex items-center gap-6">
                  <div class="flex-shrink-0">
                    <PieChart title="" data={dashboardData.statusExames} />
                  </div>
                  <div class="flex-1 space-y-2">
                    {dashboardData.statusExames.map((item, idx) => {
                      const total = dashboardData.statusExames.reduce((sum, i) => sum + i.value, 0);
                      const percentage = ((item.value / total) * 100).toFixed(1);
                      return (
                        <div key={idx} class="flex items-center justify-between">
                          <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full border border-[#3e3e42]" style={`background-color: ${item.color}`}></div>
                            <span class="text-sm font-semibold text-[#e0e0e0]">{item.label}</span>
                          </div>
                          <div class="text-sm font-bold text-[#ffffff]">
                            {item.value} ({percentage}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="bg-[#252526] border border-[#3e3e42] rounded p-6">
                <h3 class="text-lg font-bold text-[#e0e0e0] mb-4">Tipos de Exames</h3>
                <div class="space-y-3">
                  {dashboardData.tiposExames.map((item, idx) => {
                    const max = Math.max(...dashboardData.tiposExames.map(i => i.value));
                    const percentage = (item.value / max) * 100;
                    return (
                      <div key={idx}>
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-sm font-semibold text-[#e0e0e0]">{item.label}</span>
                          <span class="text-sm font-bold text-[#ffffff]">{item.value}</span>
                        </div>
                        <div class="w-full bg-[#1e1e1e] rounded-full h-4 overflow-hidden">
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

