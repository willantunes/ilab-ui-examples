import { FilterIcon, BroomIcon, PlusIcon } from "../shared/Icons.tsx";

interface ExamesPageProps {
  variant?: "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "option7" | "option8" | "option9" | "option10" | "option11" | "option12";
}

export default function ExamesPage({ variant = "option1" }: ExamesPageProps) {
  const styles = {
    option1: {
      container: "bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-200/50",
      header: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      table: "bg-white/40 backdrop-blur-sm",
    },
    option2: {
      container: "bg-white rounded-xl shadow-xl border-2 border-blue-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
      table: "bg-white",
    },
    option3: {
      container: "bg-white rounded-2xl shadow-2xl border-4 border-blue-300",
      header: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
      button: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl",
      table: "bg-white",
    },
    option4: {
      container: "bg-gray-800 rounded-xl shadow-xl border-2 border-cyan-500/30",
      header: "bg-gray-700 border-b-2 border-cyan-500 text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-500/50",
      table: "bg-gray-800",
    },
    option5: {
      container: "bg-white rounded-xl shadow-sm border border-slate-200",
      header: "bg-slate-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option6: {
      container: "bg-white rounded-2xl shadow-lg border-2 border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
      table: "bg-white",
    },
    option7: {
      container: "bg-white rounded-2xl shadow-sm border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option8: {
      container: "bg-white rounded-2xl shadow-md border border-slate-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
      table: "bg-white",
    },
    option9: {
      container: "bg-[#1e1e1e] border border-[#3e3e42]",
      header: "bg-[#094771] text-white",
      button: "bg-[#0e639c] hover:bg-[#1177bb] text-white",
      table: "bg-[#1e1e1e]",
    },
    option10: {
      container: "bg-white rounded-lg shadow-sm border border-gray-200",
      header: "bg-blue-600 text-white",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      table: "bg-white",
    },
    option11: {
      container: "bg-white rounded-lg border border-gray-200",
      header: "bg-gray-900 text-white",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
      table: "bg-white",
    },
    option12: {
      container: "bg-[#1a1a1a] border border-[#2a2a2a]",
      header: "bg-[#2a2a2a] text-white",
      button: "bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white",
      table: "bg-[#0d0d0d]",
    },
  };

  const style = styles[variant];

  const exames = [
    { id: "308535", etiqueta: "TOX437310", cpf: "375.197.698-10", doador: "HEMILY MARCONDES SOUZA SANTOS", servico: "Toxicológico CLT", rastreabilidade: "CADASTRADO", rastreabilidadeColor: "green", coleta: "12/12/2025", recebimento: "-", prazo: "-", previsao: "-", posto: "22.40 GRAL. DIAGI PESQ LABO LTDA" },
    { id: "264849", etiqueta: "TOX302180", cpf: "652.740.040-32", doador: "TESTE PAGAMENTO", servico: "Toxicológico CLT", rastreabilidade: "CADASTRO PENDENTE", rastreabilidadeColor: "orange", coleta: "06/11/2025", recebimento: "-", prazo: "-", previsao: "-", posto: "22.40 GRAL. DIAGI PESQ LABO LTDA" },
    { id: "258484", etiqueta: "TOX437337", cpf: "010.867.208-57", doador: "JOSEMAR GOMES DE JESUS", servico: "Toxicológico CNH", rastreabilidade: "LAUDO LIBERADO", rastreabilidadeColor: "green", coleta: "01/11/2025", recebimento: "01/11/2025 12:28", prazo: "2", previsao: "04/11/2025", posto: "22.40 GRAL DIAGI PESQ LABO LTDA" },
  ];

  const isDark = variant === "option4" || variant === "option9" || variant === "option12";
  const textColor = isDark ? "text-gray-100" : "text-slate-900";
  const textColorSecondary = isDark ? "text-gray-300" : "text-slate-600";
  const borderColor = isDark ? (variant === "option9" ? "border-[#3e3e42]" : variant === "option12" ? "border-[#2a2a2a]" : "border-gray-700") : "border-slate-200";

  return (
    <div class={style.container}>
      {/* Header */}
      <div class={`${style.header} px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl`}>
        <h1 class="text-xl sm:text-2xl font-bold">Exames Cadastrados</h1>
        <div class="text-xs sm:text-sm mt-1 opacity-90">
          Início &gt; Cadastro de Exames [Pesquisa]
        </div>
      </div>

      {/* Actions Bar */}
      <div class={`px-4 sm:px-6 py-3 sm:py-4 border-b ${borderColor} flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3`}>
        <div class="font-semibold text-xs sm:text-sm">Ações do Formulário:</div>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <button class={`${style.button} px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all`}>
            <BroomIcon />
            Limpar Filtros
          </button>
          <button class={`${style.button} px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all`}>
            Novo
          </button>
        </div>
      </div>

      {/* Table - Mobile responsive */}
      <div class="overflow-x-auto -mx-4 sm:mx-0">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table class={`min-w-full divide-y divide-gray-200 ${style.table}`}>
              <thead class="hidden sm:table-header-group">
                <tr class={`${isDark ? "bg-gray-700" : "bg-slate-50"} ${textColor}`}>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                    <div class="flex items-center gap-1 sm:gap-2">Identificador <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                    <div class="flex items-center gap-1 sm:gap-2">Etiqueta <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">CPF <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                    <div class="flex items-center gap-1 sm:gap-2">Doador <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Serviço <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                    <div class="flex items-center gap-1 sm:gap-2">Rastreabilidade <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden sm:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Data Coleta <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Recebimento <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden xl:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Prazo <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden xl:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Previsão <FilterIcon /></div>
                  </th>
                  <th class="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold hidden lg:table-cell">
                    <div class="flex items-center gap-1 sm:gap-2">Posto <FilterIcon /></div>
                  </th>
                </tr>
              </thead>
          <tbody>
            {exames.map((exame, idx) => {
              const rowBg = idx % 2 === 0 
                ? (isDark ? "bg-gray-800/50" : "bg-white") 
                : (isDark ? "bg-gray-800" : "bg-slate-50");
              const linkColor = isDark ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-800";
              const badgeClass = exame.rastreabilidadeColor === "green" 
                ? (isDark ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-green-100 text-green-800")
                : (isDark ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-orange-100 text-orange-800");
              return (
                <>
                  {/* Mobile Card View */}
                  <div class={`sm:hidden ${rowBg} ${textColorSecondary} border-b ${borderColor} p-4 space-y-3`}>
                    <div class="flex items-center justify-between">
                      <a href="#" class={`${linkColor} font-semibold text-base`}>{exame.id}</a>
                      <span class={`px-2 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                        {exame.rastreabilidade}
                      </span>
                    </div>
                    <div>
                      <div class="font-medium text-sm mb-1">{exame.doador}</div>
                      <div class="text-xs space-y-1">
                        <div><span class="font-medium">Etiqueta:</span> {exame.etiqueta}</div>
                        <div><span class="font-medium">CPF:</span> {exame.cpf}</div>
                        <div><span class="font-medium">Serviço:</span> {exame.servico}</div>
                        <div><span class="font-medium">Coleta:</span> {exame.coleta}</div>
                        {exame.recebimento !== "-" && <div><span class="font-medium">Recebimento:</span> {exame.recebimento}</div>}
                        {exame.prazo !== "-" && <div><span class="font-medium">Prazo:</span> {exame.prazo} dias</div>}
                        {exame.previsao !== "-" && <div><span class="font-medium">Previsão:</span> {exame.previsao}</div>}
                      </div>
                      <div class="text-xs truncate mt-2">{exame.posto}</div>
                    </div>
                  </div>
                  {/* Desktop Table Row */}
                  <tr class={`hidden sm:table-row ${rowBg} ${textColorSecondary} border-b ${borderColor}`}>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                      <a href="#" class={`${linkColor} font-medium`}>
                        {exame.id}
                      </a>
                    </td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{exame.etiqueta}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden md:table-cell">{exame.cpf}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">{exame.doador}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell">{exame.servico}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                      <span class={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                        {exame.rastreabilidade}
                      </span>
                    </td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden sm:table-cell">{exame.coleta}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell">{exame.recebimento}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden xl:table-cell">{exame.prazo}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden xl:table-cell">{exame.previsao}</td>
                    <td class="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hidden lg:table-cell">{exame.posto}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div class={`px-4 sm:px-6 py-3 sm:py-4 border-t ${borderColor} flex flex-col sm:flex-row items-center justify-between gap-3`}>
        <div class={`${textColorSecondary} text-xs sm:text-sm text-center sm:text-left`}>Mostrando 50 de 1603</div>
        <button class={`${style.button} w-full sm:w-auto px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-all`}>
          <PlusIcon />
          Carregar
        </button>
      </div>
    </div>
  );
}

