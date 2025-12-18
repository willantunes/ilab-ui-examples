import { ArrowLeftIcon, FileTextIcon } from "../shared/Icons.tsx";

interface CadastroPageProps {
  variant?: "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "option7" | "option8" | "option9" | "option10" | "option11" | "option12";
}

export default function CadastroPage({ variant = "option1" }: CadastroPageProps) {
  const styles = {
    option1: {
      container: "bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50",
      header: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      section: "bg-white/40 backdrop-blur-sm border border-blue-200/50",
      buttonGreen: "bg-green-500 hover:bg-green-600 text-white",
    },
    option2: {
      container: "bg-white rounded-xl shadow-xl border-2 border-blue-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
      section: "bg-white border-2 border-blue-200 shadow-md",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-lg",
    },
    option3: {
      container: "bg-white rounded-2xl shadow-2xl border-4 border-blue-300",
      header: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl",
      section: "bg-white border-2 border-blue-300 shadow-lg",
      buttonGreen: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl",
    },
    option4: {
      container: "bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30",
      header: "bg-gray-700 border-b-2 border-cyan-500 text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-500/50",
      section: "bg-gray-800 border border-cyan-500/30",
      buttonGreen: "bg-green-500 hover:bg-green-400 text-gray-900 shadow-lg shadow-green-500/50",
    },
    option5: {
      container: "bg-white rounded-xl shadow-sm border border-slate-200",
      header: "bg-slate-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      section: "bg-white border border-slate-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option6: {
      container: "bg-white rounded-2xl shadow-lg border-2 border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
      section: "bg-white border-2 border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-md",
    },
    option7: {
      container: "bg-white rounded-2xl shadow-sm border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      section: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option8: {
      container: "bg-white rounded-2xl shadow-md border border-slate-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
      section: "bg-white border border-slate-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white shadow-sm",
    },
    option9: {
      container: "bg-[#1e1e1e] border border-[#3e3e42]",
      header: "bg-[#094771] text-white",
      button: "bg-[#0e639c] hover:bg-[#1177bb] text-white",
      section: "bg-[#252526] border border-[#3e3e42]",
      buttonGreen: "bg-[#0e7c0e] hover:bg-[#117a11] text-white",
    },
    option10: {
      container: "bg-white rounded-lg shadow-sm border border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      section: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option11: {
      container: "bg-white rounded-lg border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
      section: "bg-white border border-gray-200",
      buttonGreen: "bg-green-600 hover:bg-green-700 text-white",
    },
    option12: {
      container: "bg-[#1a1a1a] border border-[#2a2a2a]",
      header: "bg-[#2a2a2a] text-white",
      button: "bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white",
      section: "bg-[#0d0d0d] border border-[#2a2a2a]",
      buttonGreen: "bg-[#2d5016] hover:bg-[#3a6a1f] text-white",
    },
  };

  const style = styles[variant];

  const isDark = variant === "option4" || variant === "option9" || variant === "option12";
  const textColor = isDark ? "text-gray-100" : "text-slate-900";
  const textColorSecondary = isDark ? "text-gray-300" : "text-slate-600";
  const borderColor = isDark ? (variant === "option9" ? "border-[#3e3e42]" : variant === "option12" ? "border-[#2a2a2a]" : "border-gray-700") : "border-slate-200";
  const inputBg = isDark ? (variant === "option9" ? "bg-[#3c3c3c] border-[#3e3e42] text-white" : variant === "option12" ? "bg-[#0d0d0d] border-[#2a2a2a] text-white" : "bg-gray-700 border-gray-600 text-gray-100") : "bg-white border-slate-300 text-slate-900";

  return (
    <div>
      <button class={`${style.button} mb-3 sm:mb-4 px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base font-medium transition-all w-full sm:w-auto`}>
        <ArrowLeftIcon />
        Voltar
      </button>

      <div class={style.container}>
        {/* Header */}
        <div class={`${style.header} px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl`}>
          <h1 class="text-xl sm:text-2xl font-bold">Cadastro de Protocolo</h1>
          <div class="text-xs sm:text-sm mt-1 opacity-90">
            Início &gt; Cadastro de Exames [Pesquisa] &gt; Novo
          </div>
        </div>

        {/* Tabs */}
        <div class={`px-4 sm:px-6 py-2 sm:py-3 border-b ${borderColor} flex gap-2 sm:gap-4 overflow-x-auto`}>
          <button class={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ${isDark ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-blue-600 text-white"}`}>
            Cadastro
          </button>
          <button class={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ${textColorSecondary} ${isDark ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}>
            Imprimir
          </button>
        </div>

        <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Escolha do Serviço */}
          <div class={style.section + " p-4 sm:p-6 rounded-xl"}>
            <div class={`${isDark ? "bg-gray-700 border-cyan-500/30" : "bg-blue-600"} px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4`}>
              <h2 class={`text-base sm:text-lg font-bold ${isDark ? "text-cyan-400" : "text-white"}`}>Escolha do Serviço</h2>
            </div>

            <div class="space-y-3 sm:space-y-4">
              <div>
                <label class={`block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 ${textColor}`}>
                  Etiqueta <span class="text-red-500">*</span>
                </label>
                <input type="text" placeholder="-" class={`w-full px-3 sm:px-4 py-2 rounded-lg border text-sm sm:text-base ${inputBg} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-cyan-500" : "focus:ring-blue-500"}`} />
                <p class={`text-xs mt-1 ${textColorSecondary}`}>* Campo Obrigatório | ?</p>
              </div>

              <div>
                <label class={`block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 ${textColor}`}>
                  PCL(Posto de Coleta Laboratorial) <span class="text-red-500">*</span>
                </label>
                <select class={`w-full px-3 sm:px-4 py-2 rounded-lg border text-sm sm:text-base ${inputBg} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-cyan-500" : "focus:ring-blue-500"}`}>
                  <option>Selecione PCL...</option>
                </select>
                <p class={`text-xs mt-1 ${textColorSecondary}`}>* Campo Obrigatório | ?</p>
              </div>

              <div>
                <label class={`block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 ${textColor}`}>
                  Finalidade <span class="text-red-500">*</span>
                </label>
                <select class={`w-full px-3 sm:px-4 py-2 rounded-lg border text-sm sm:text-base ${inputBg} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-cyan-500" : "focus:ring-blue-500"}`}>
                  <option>Selecione Finalidade...</option>
                </select>
                <p class={`text-xs mt-1 ${textColorSecondary}`}>* Campo Obrigatório | ?</p>
              </div>

              {/* Service Table */}
              <div class="mt-3 sm:mt-4 overflow-x-auto">
                <table class="w-full min-w-[500px]">
                  <thead>
                    <tr class={`${isDark ? "bg-gray-700" : "bg-slate-50"} ${textColor}`}>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Finalidade</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Qtde. Laudo</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Preço</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class={`px-3 sm:px-4 py-6 sm:py-8 text-center text-xs sm:text-sm ${textColorSecondary}`}>
                        No matching records found
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class={`mt-3 sm:mt-4 text-right text-sm sm:text-base font-bold ${textColor}`}>Total: R$ 0,00</div>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div class={`${isDark ? "bg-cyan-500/20 border-cyan-500/30" : "bg-blue-50 border-blue-200"} border px-4 py-3 rounded-lg flex items-center gap-3`}>
            <span class="text-xl">ℹ️</span>
            <span class={textColorSecondary}>Atualizando o Formulário!</span>
          </div>

          {/* Pagamento */}
          <div class={style.section + " p-4 sm:p-6 rounded-xl"}>
            <div class={`${isDark ? "bg-gray-700 border-cyan-500/30" : "bg-blue-600"} px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4`}>
              <h2 class={`text-base sm:text-lg font-bold ${isDark ? "text-cyan-400" : "text-white"}`}>Pagamento</h2>
            </div>

            <div class="space-y-3 sm:space-y-4">
              <div class={`${isDark ? "bg-gray-700/50" : "bg-slate-50"} p-3 sm:p-4 rounded-lg`}>
                <p class={`text-xs sm:text-sm ${textColorSecondary}`}>Nenhum Vale-Exame(Voucher) encontrado!</p>
              </div>

              <div class={`${isDark ? "bg-gray-700/50" : "bg-slate-50"} p-3 sm:p-4 rounded-lg`}>
                <p class={`text-xs sm:text-sm ${textColorSecondary}`}>Nenhum comprovante de venda encontrado!</p>
              </div>

              {/* Payment Tabs */}
              <div class="flex gap-2 overflow-x-auto">
                {["Máquina GRALAB", "Voucher", "Outros", "Link de Pagamento do Doador"].map((tab, idx) => {
                  const isActive = idx === 0;
                  const activeClass = isDark ? "bg-cyan-500 text-gray-900" : "bg-blue-600 text-white";
                  const inactiveClass = `${textColorSecondary} ${isDark ? "hover:bg-gray-700" : "hover:bg-slate-50"}`;
                  return (
                    <button class={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap ${isActive ? activeClass : inactiveClass}`}>
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Payment Table */}
              <div class="mt-3 sm:mt-4 overflow-x-auto">
                <table class="w-full min-w-[600px]">
                  <thead>
                    <tr class={`${isDark ? "bg-gray-700" : "bg-slate-50"} ${textColor}`}>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Forma</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">Data</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Valor</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">Comprovante</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden xl:table-cell">Complemento</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">Usuário</th>
                      <th class="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7" class={`px-3 sm:px-4 py-6 sm:py-8 text-center text-xs sm:text-sm ${textColorSecondary}`}>
                        No matching records found
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class={`mt-3 sm:mt-4 text-right text-sm sm:text-base font-bold ${textColor}`}>Total Pago: R$ 0,00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div class={`px-4 sm:px-6 py-3 sm:py-4 border-t ${borderColor} flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end`}>
          <button class={`${style.button} w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all`}>
            Voltar
          </button>
          <button class={`${style.button} w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all`}>
            Anexar Documento
          </button>
          <button class={`${style.button} w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all`}>
            Histórico
          </button>
          <button class={`${style.buttonGreen} w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all`}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

