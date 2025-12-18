import { ArrowLeftIcon, FileTextIcon, CheckCircleIcon } from "../shared/Icons.tsx";

interface HistoricoPageProps {
  variant?: "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "option7" | "option8" | "option9" | "option10" | "option11" | "option12";
}

export default function HistoricoPage({ variant = "option1" }: HistoricoPageProps) {
  const styles = {
    option1: {
      container: "bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50",
      header: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      card: "bg-white/40 backdrop-blur-sm border border-blue-200/50",
      buttonGreen: "bg-green-500 hover:bg-green-600 text-white",
    },
    option2: {
      container: "bg-white rounded-xl shadow-xl border-2 border-blue-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
      card: "bg-white border-2 border-blue-200 shadow-md",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-lg",
    },
    option3: {
      container: "bg-white rounded-2xl shadow-2xl border-4 border-blue-300",
      header: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl",
      card: "bg-white border-2 border-blue-300 shadow-lg",
      buttonGreen: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl",
    },
    option4: {
      container: "bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30",
      header: "bg-gray-700 border-b-2 border-cyan-500 text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-500/50",
      card: "bg-gray-800 border border-cyan-500/30",
      buttonGreen: "bg-green-500 hover:bg-green-400 text-gray-900 shadow-lg shadow-green-500/50",
    },
    option5: {
      container: "bg-white rounded-xl shadow-sm border border-slate-200",
      header: "bg-slate-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      card: "bg-white border border-slate-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option6: {
      container: "bg-white rounded-2xl shadow-lg border-2 border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
      card: "bg-white border-2 border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-md",
    },
    option7: {
      container: "bg-white rounded-2xl shadow-sm border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      card: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option8: {
      container: "bg-white rounded-2xl shadow-md border border-slate-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
      card: "bg-white border border-slate-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-sm",
    },
    option9: {
      container: "bg-[#1e1e1e] border border-[#3e3e42]",
      header: "bg-[#094771] text-white",
      button: "bg-[#0e639c] hover:bg-[#1177bb] text-white",
      card: "bg-[#252526] border border-[#3e3e42]",
      buttonGreen: "bg-[#0e7c0e] hover:bg-[#117a11] text-white",
    },
    option10: {
      container: "bg-white rounded-lg shadow-sm border border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      card: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option11: {
      container: "bg-white rounded-lg border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
      card: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option12: {
      container: "bg-[#1a1a1a] border border-[#2a2a2a]",
      header: "bg-[#2a2a2a] text-white",
      button: "bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white",
      card: "bg-[#0d0d0d] border border-[#2a2a2a]",
      buttonGreen: "bg-[#2d5016] hover:bg-[#3a6a1f] text-white",
    },
  };

  const style = styles[variant];

  const isDark = variant === "option4" || variant === "option9" || variant === "option12";
  const textColor = isDark ? "text-gray-100" : "text-slate-900";
  const textColorSecondary = isDark ? "text-gray-300" : "text-slate-600";
  const borderColor = isDark ? (variant === "option9" ? "border-[#3e3e42]" : variant === "option12" ? "border-[#2a2a2a]" : "border-gray-700") : "border-slate-200";

  return (
    <div>
      <button class={`${style.button} mb-3 sm:mb-4 px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base font-medium transition-all w-full sm:w-auto`}>
        <ArrowLeftIcon />
        Voltar
      </button>

      <div class={style.container}>
        {/* Header */}
        <div class={`${style.header} px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl`}>
          <h1 class="text-xl sm:text-2xl font-bold">Histórico da Amostra</h1>
        </div>

        {/* Tabs */}
        <div class={`px-4 sm:px-6 py-2 sm:py-3 border-b ${borderColor} flex gap-2 sm:gap-4 overflow-x-auto`}>
          <button class={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ${isDark ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-blue-600 text-white"}`}>
            Histórico
          </button>
          <button class={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ${textColorSecondary} ${isDark ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}>
            Arquivos para Impressão
          </button>
        </div>

        <div class="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Rastreabilidade */}
          <div class={style.card + " p-4 sm:p-6 rounded-xl"}>
            <h2 class={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${textColor}`}>Rastreabilidade da Amostra</h2>
            <div class="space-y-4">
              {[
                { label: "Coleta de Amostras", date: "01/11/25 08:58" },
                { label: "Em transporte", date: "01/11/25 13:48" },
                { label: "Recebido no Laboratório", date: "01/11/25 12:28" },
                { label: "Laudo Liberado", date: "03/11/25 16:39" },
                { label: "Laudo Médico Revisor liberado", date: "03/11/25 16:40" },
              ].map((item) => (
                <div class="flex items-center gap-3">
                  <div class={`${isDark ? "text-green-400" : "text-green-600"}`}>
                    <CheckCircleIcon />
                  </div>
                  <div class="flex-1">
                    <div class={textColor + " font-medium"}>{item.label}</div>
                    <div class={textColorSecondary + " text-sm"}>{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informações da Amostra */}
          <div class={style.card + " p-4 sm:p-6 rounded-xl"}>
            <h2 class={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${textColor}`}>Informações da Amostra</h2>
            
            {/* Doador Table */}
            <div class="mb-3 sm:mb-4 overflow-x-auto">
              <table class="w-full min-w-[300px]">
                <thead>
                  <tr class={`${isDark ? "bg-gray-700" : "bg-blue-50"} ${textColor}`}>
                    <th class="px-2 sm:px-3 py-1.5 sm:py-2 text-left text-xs sm:text-sm font-semibold">Tipo</th>
                    <th class="px-2 sm:px-3 py-1.5 sm:py-2 text-left text-xs sm:text-sm font-semibold">Doador</th>
                    <th class="px-2 sm:px-3 py-1.5 sm:py-2 text-left text-xs sm:text-sm font-semibold">Etiqueta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class={textColorSecondary + " border-b " + borderColor}>
                    <td class="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"></td>
                    <td class="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">JOSEMAR GOMES DE JESUS</td>
                    <td class="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">TOX437337</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabs */}
            <div class="flex gap-2 mb-3 sm:mb-4 overflow-x-auto">
              <button class={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold whitespace-nowrap ${isDark ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-blue-600 text-white"}`}>
                Informações
              </button>
              <button class={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold whitespace-nowrap ${textColorSecondary}`}>
                Dados Complementares
              </button>
            </div>

            {/* Details */}
            <div class="space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Posto de Coleta:</span>
                <span class={textColor + " text-sm font-medium"}>GRALAB DIAGNOSTICOS</span>
              </div>
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Tipo:</span>
                <span class={textColor + " text-sm font-medium"}>Toxicológico CNH</span>
              </div>
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Protocolo:</span>
                <span class={textColor + " text-sm font-medium"}>258484-011125-02AA09</span>
              </div>
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Data da Coleta:</span>
                <span class={textColor + " text-sm font-medium"}>01/11/2025</span>
              </div>
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Tipo do Solicitante:</span>
                <span class={textColor + " text-sm font-medium"}>01 - PARTICULAR</span>
              </div>
              <div class="flex justify-between">
                <span class={textColorSecondary + " text-sm"}>Fonte Pagadora:</span>
                <span class={textColor + " text-sm font-medium"}>GRALAB DIAGNOSTICOS E PESQUISAS LABORATORIAIS LTDA</span>
              </div>
            </div>

            <button class={`${style.buttonGreen} w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all`}>
              <FileTextIcon />
              Abrir Laudo
            </button>
          </div>
        </div>

        {/* Laudo Médico Revisor */}
        <div class={`p-4 sm:p-6 border-t ${borderColor}`}>
          <div class={style.card + " p-3 sm:p-4 rounded-xl"}>
            <h3 class={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${textColor}`}>Laudo Médico Revisor Toxicológico REV.0</h3>
            <button class={`${style.button} w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all`}>
              <FileTextIcon />
              <span class="hidden sm:inline">Abrir Laudo (Laudo Médico Revisor Toxicológico REV.0)</span>
              <span class="sm:hidden">Abrir Laudo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

